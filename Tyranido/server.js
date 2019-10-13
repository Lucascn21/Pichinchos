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
});


var bodyParser = require('body-parser')
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.post('/bla', function(req, res) {
    let anios
    let data, resultados,
        pedido,
        msjError;
    // console.dir(req.body);
    //http://www.omdbapi.com/?i=tt3896198&apikey=40921d99
    // console.dir(req.body);
    axios
        .get('https://www.omdbapi.com/', {
            params: {
                // i: 'tt3896198', //ID IMDb (REQUERIDO ESTE O t PARA BUSQUEDAS ESPECIFICAS) 
                //t: 'of', //retorna el primer titulo que contiene esta string (REQUERIDO ESTE O i PARA BUSQUEDAS ESPECIFICAS)
                //s: 'of the', //devuelve array de objetos, tambien una propiedad llamada totalResults. Con 'of' devolvia un error: demasiados resultados. (BUSQUEDAS GENERALES)
                //type:'movie' // movie, series, episode ESPECIFICA SI BUSCAMOS UNA SERIE, PELI O EPISODIO ESPECIFICO
                //y:1992 //anio de estreno/release de la serie, pelicula o episodio.
                //page: 1 //Numero de pagina
                i: req.body.imdb,
                t: req.body.titulo,
                s: req.body.busqueda,
                type: req.body.tipo,
                y: req.body.anio,
                page: req.body.pagina,
                apikey: '40921d99'
            }
        })
        .then(function(response) {
            anios = [];
            pedido = req.body.busqueda;
            //Si recibo respuesta, continuo, sino rechazo la promesa 
            if (response.data.Response == 'True') {
                //Si recibo array de resultados, lo guardo, sino guardo la data del elemento
                if (response.data.Search) {
                    data = response.data.Search
                    console.dir(data)
                    data.forEach(element => {
                        //Si no tengo poster, le pongo esta imagen que avisa que no hay poster
                        if (element.Poster == 'N/A') element.Poster = "/resources/no_imagen.png";
                        if (!anios.includes(element.Year)) anios.push(element.Year);
                        if (element.Type == 'game') element.Type = '';
                    });
                } else {
                    data = response.data;
                }
                resultados = response.data.totalResults;
            } else {
                throw new Error(response.data.Error);
            }
        })
        .catch(function(error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                //console.log(error.response.data);
                //console.log(error.response.status);
                //console.log(error.response.headers);
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
            res.render('home', { error: msjError }); //Sin este if, node me da Unhandled promise rejection cuando recibo no recibo data pero si msjerror
        })
        .finally(function() {
            //Si no hay msj de error, prosigamos, sino el finally siempre se ejecuta.
            if (!msjError) {
                //Si la data es un array de datos, paso la lista a la vista y la cantidad de resultados (es solo para la alerta que muestra la cantidad de resultados)
                if (Array.isArray(data)) {
                    res.render('peliculas', { listaPeliculas: data, resultados: resultados, pedido: pedido, anios: anios }); //Sin este if, node me da Unhandled promise rejection cuando recibo no recibo data pero si msjerror
                } else {
                    //Si no he recibido un array en data, es porque el request es de una sola peli, renderizo la vista.
                    //Los ratings vienen en 3 formatos, cada uno lo maneje diferente para transformar su value a un entero correspondiente al %
                    data.Ratings.forEach(element => {
                        if (element.Source == 'Internet Movie Database') {
                            //Divido el string, en res[0] tengo el score actual, en res[1] tengo el valor total sobre el cual se divide el score actual
                            let res = element.Value.split("/");
                            element.Value = Math.round(res[0] / res[1] * 100)
                        } else if (element.Source == 'Rotten Tomatoes') {
                            let res = element.Value.split("%");
                            element.Value = parseInt(res[0])
                        } else if (element.Source == 'Metacritic') {
                            element.Value = parseInt(element.Value);
                        } else {
                            console.log("soy algun rating que no consideraste / tenias en ese momento " + element.Value);
                            console.error("soy algun rating que no consideraste / tenias en ese momento " + element.Value);
                        }

                    });
                    //Si no tengo sitio, premios o $ ganada, quiero el string vacio para que handlebars no ponga el elemento en la vista
                    if (data.Website == 'N/A') data.Website = '';
                    if (data.Awards == 'N/A') data.Awards = '';
                    if (data.BoxOffice == 'N/A') data.BoxOffice = '';
                    if (data.Director == 'N/A') data.Director = '';
                    if (data.Poster == 'N/A') data.Poster = '/resources/no_imagen.png';
                    res.render('pelicula', { pelicula: data })
                }
            }
        });

});
app.listen(puerto, () => console.log(`Estoy en https://localhost:${puerto}/`))