const express = require('express');
const app = express();
const path = require('path');

const bodyParser = require('body-parser');
app.use(express.static(__dirname + '/public')); //cuando te venga un pedido de un archivo estatico, anda a buscarlo a la carpeta public

//GET "/" que retorne la página index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"));


});

app.use(bodyParser.urlencoded({ extended: true })); //segun tipo de info que viene en el form, puede ser que nos genere problemas sin extended true. Es un objeto nuevo.
//app.use(bodyParser.json); 
app.post("/login", (req, res) => {
    console.dir(req.body);
    res.sendFile(path.join(__dirname, "public/home.html"));

});


app.listen(3000, () => {
    console.log("Server corriendo en puerto 3000... http://localhost:3000");
});

/******************************/