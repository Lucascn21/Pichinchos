const express = require("express");
const path = require("path");
const fs = require('fs');
const exphbs = require('express-handlebars');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/layout')
}));
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'views'));

app.get("/", (req, res) => {
    res.render('home');
});

app.get("/paises", (req, res) => {
    fs.readFile(path.join(__dirname, "resources/paises.json"), (err, data) => {
        if (!err) {
            let paises = JSON.parse(data);
            console.dir(req.query.nombre); //Confirmo que llegan queries
            console.dir(req.query.codigo);

            if (req.query.nombre) {
                paises = paises.filter(pais => pais.name == req.query.nombre);
            }

            if (req.query.codigo) {
                paises = paises.filter(pais => pais.code == req.query.codigo);
            }
            console.dir(paises); //Confirmo que el array filtrado cumple con lo esperado
            res.render('paises', {
                listaPaises: paises,
                tipoMetodo: req.method //Es para mostrar dinamicamente que tipo de metodo se usó en el H2 de la view paises.
            });
        }
    });

});


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); //segun tipo de info que viene en el form, puede ser que nos genere problemas sin extended true. Es un objeto nuevo.

app.post("/paises", (req, res) => {
    fs.readFile(path.join(__dirname, "resources/paises.json"), (err, data) => {
        if (!err) {
            let paises = JSON.parse(data);
            console.dir(req.body); //confirmo el body de la request
            if (req.body.nombre) {
                paises = paises.filter(pais => pais.name == req.body.nombre);
            }

            if (req.body.codigo) {
                paises = paises.filter(pais => pais.code == req.body.codigo);
            }
            console.dir(paises); //confirmo se filtro correctamente
            res.render('paises', {
                listaPaises: paises,
                tipoMetodo: req.method ////Es para mostrar dinamicamente que tipo de metodo se usó en el H2 de la view paises.
            });
        }
    });
});

app.listen(3000, () => {
    console.log("Corriendo en puerto 3000 http://localhost:3000/");
});