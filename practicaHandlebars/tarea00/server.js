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




app.listen(5000, () => {
    console.log("Corriendo en http://localhost:5000");
});


app.get("/nivel1", (req, res) => {
    fs.readFile(path.join(__dirname, "resources/live-playlist.json"), (err, data) => {
        if (!err) {
            let elementoPlaylist = JSON.parse(data);
            res.render('n1ElementosPlaylist', {
                listaElementosPlaylist: elementoPlaylist
            });
        }
    });
});

app.get("/nivel2playlist", (req, res) => {
    fs.readFile(path.join(__dirname, "resources/live-playlist.json"), (err, data) => {
        if (!err) {
            let elementoPlaylist = JSON.parse(data);
            res.render('n2ElementosPlaylist', {
                listaElementosPlaylist: elementoPlaylist
            });
        }
    });

});

app.get("/nivel2iframe", (req, res) => {
    fs.readFile(path.join(__dirname, "resources/live-playlist.json"), (err, data) => {
        if (!err) {
            let elementoPlaylist = JSON.parse(data);
            if (req.query.videoId) {
                elementoPlaylist = elementoPlaylist.filter(elemento => elemento.videoId == req.query.videoId);
            } else {
                elementoPlaylist = [];
            }
            res.render('n2ElementosIframe', {
                listaElementosPlaylist: elementoPlaylist
            });
        }
    });

});

app.get("/nivel3iframe", (req, res) => {
    fs.readFile(path.join(__dirname, "resources/live-playlist.json"), (err, data) => {
        if (!err) {
            let elementoPlaylist = JSON.parse(data);
            if (req.query.artist || req.query.song) {
                elementoPlaylist = elementoPlaylist.filter(elemento => elemento.artist == req.query.artist || elemento.song == req.query.song);
            } else {
                elementoPlaylist = [];
            }
            res.render('n3ElementosIframe', {
                listaElementosPlaylist: elementoPlaylist
            });
        }
    });
});

app.get("/nivel3Formulario", (req, res) => {
    res.render('n3Formulario');
});