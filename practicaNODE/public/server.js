const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'))
    //Recibe dos parametros, basicamente significa que cuando reciba un get. Tiene dos parametros, la url y un callback que recibe request y response
app.get('/pingtest', (req, res) => {
    res.send("ok");
})

app.get('/autores', (req, res) => {
    res.send("ok"); //todo, debe devovler json (remember stringify)
})

app.get('/', (req, res) => {
    //res.sendFile('public/index.html'); //Esto no nada, express nos demanda ruta absoluta
    res.sendFile(__dirname + '/public/index.html'); //Anda pero no va a encontrar el css despues, express requiere saber donde buscar archivos estaticos, ahora le agregamos la linea 4 y deberia andar
})
app.listen(3000);