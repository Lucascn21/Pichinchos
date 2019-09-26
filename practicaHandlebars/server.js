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
            console.dir(req.query.nombre);
            console.dir(req.query.codigo);

            if (req.query.nombre) {
                paises = paises.filter(pais => pais.name == req.query.nombre);
            }

            if (req.query.codigo) {
                paises = paises.filter(pais => pais.code == req.query.codigo);
            }
            console.dir(paises);
            res.render('paises', {
                listaPaises: paises
            });
        }
    });

});

/*
const queryParser = require('query-parser');
app.use(queryParser.urlencoded({ extended: true }));
app.post("/paises", (req, res) => {

    fs.readFile(path.join(__dirname, "resources/paises.json"), (err, data) => {
        if (!err) {
            let paises = JSON.parse(data);
            console.dir(req.query);
            if (req.query.nombre) {
                paises = paises.filter(pais => pais.name == req.query.nombre);
            }

            if (req.query.codigo) {
                paises = paises.filter(pais => pais.code == req.query.codigo);
            }
            console.dir(paises);
            res.render('paises', {
                listaPaises: paises
            });
        }
    });

});
*/
app.listen(3000, () => {
    console.log("Corriendo en puerto 3000 http://localhost:3000/");
});