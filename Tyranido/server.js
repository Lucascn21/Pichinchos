const express = require('express')
const app = express()
const puerto = 3000
const path = require("path");


//Axios
const axios = require('axios');
//Axios

//Handlebars
const exphbs = require('express-handlebars');
app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/layout'),
    helpers: {
        grouped_each: function(every, context, options) {
            let out = "",
                subcontext = [],
                i;
            if (context && context.length > 0) {
                for (i = 0; i < context.length; i++) {
                    if (i > 0 && i % every === 0) {
                        out += options.fn(subcontext);
                        subcontext = [];
                    }
                    subcontext.push(context[i]);
                }
                out += options.fn(subcontext);
            }
            return out;
        }
    }
}));
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'views'));
//Handlebars


app.get("/", (req, res) => {
    res.render('home');
    //res.sendFile(path.join(`${__dirname}/index.html`));
});


app.get('/bla', function(req, res) {
    let data;
    //http://www.omdbapi.com/?i=tt3896198&apikey=40921d99
    axios
        .get('https://www.omdbapi.com/', {
            params: {
                // i: 'tt3896198', //ID IMDb (REQUERIDO ESTE O t PARA BUSQUEDAS ESPECIFICAS) 
                //t: 'of', //retorna el primer titulo que contiene esta string (REQUERIDO ESTE O i PARA BUSQUEDAS ESPECIFICAS)
                //s: 'of the', //devuelve array de objetos, tambien una propiedad llamada totalResults. Con 'of' devolvia un error: demasiados resultados. (BUSQUEDAS GENERALES)
                //type:'movie' // movie, series, episode ESPECIFICA SI BUSCAMOS UNA SERIE, PELI O EPISODIO ESPECIFICO
                //y:1992 //Año de estreno/release de la serie, pelicula o episodio.
                //page: 1 //Numero de pagina
                i: req.query.imdb,
                t: req.query.titulo,
                s: req.query.busqueda,
                type: req.query.tipo,
                y: req.query.año,
                page: req.query.pagina,
                apikey: '40921d99'
            }
        })
        .then(function(response) {

            //console.dir(response);
            // console.log(response.data.Search[1]); //Array cuando recibo muchos elementos
            //Si recibo respuesta, continuo, sino rechazo la promesa 
            if (response.data.Response == 'True')
            //Si recibo array de resultados, lo guardo, sino guardo la data del elemento
                data = response.data.Search ? response.data.Search : response.data;

            else throw new Error(response.data.Error);
            console.dir(response.data);

        })
        .catch(function(error) {
            let msjError;
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                msjError = error.response;
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
                msjError = error.request;
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log(`Mensaje de Error: ${error.message}`);
                msjError = error.message;
            }
            //res.send(JSON.stringify(msjError));
            res.render('peliculas'); //Sin este if, node me da Unhandled promise rejection cuando recibo no recibo data pero si msjerror
        })
        .finally(function() {
            console.log("finally, data enviada");
            // console.dir(data);
            // if (data) res.send(JSON.stringify(data)); //Sin este if, node me da Unhandled promise rejection cuando recibo no recibo data pero si msjerror

            if (data) res.render('peliculas', { listaPeliculas: data }); //Sin este if, node me da Unhandled promise rejection cuando recibo no recibo data pero si msjerror


        });
});
app.listen(puerto, () => console.log(`Estoy en https://localhost:${puerto}/`))

Handlebars = require("Handlebars");