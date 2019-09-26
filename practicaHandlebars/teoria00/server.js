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

app.get("/discos", (req, res) => {

    fs.readFile(path.join(__dirname, "discos.json"), (err, data) => {
        if (!err) {
            let discos = JSON.parse(data);

            if (req.query.lanzamiento) {
                discos = discos.filter(disco => disco.lanzamiento == req.query.lanzamiento);
            }

            if (req.query.artista) {
                discos = discos.filter(disco => disco.artista == req.query.artista);
            }

            res.render('discos', {
                listaDiscos: discos
            });
        }
    });

});

app.listen(5000, () => {
    console.log("Corriendo en puerto 5000");
});