//forma en la que vamos a importar librerias, sea que las bajamos con npm o las tenemos por ahi. Tambien sirve para vincular cualquier otro archivo.
const fs = require('fs');
//console.log(fs);
var path = "test.json";
var data = fs.readFileSync(path);
/*
console.log(data);
console.log(JSON.parse(data));
*/

//Es una buena regla de dedo que si veo un CALLBACK, TENGO QUE CONSIDERAR LA ASINCRONIA A LA HORA DE MANEJAR LOS DATOS EN MI HILO DE CODIGO
fs.readFile(path, (err, data) => { //Si hago otro readfile paralelo, el que tarde mas va a venir segundo, mas alla de cuando fue ejecutado, recordar callbacks y cb queue
    if (err) {
        console.log("¡ERROR! \n" + err)
    } else {
        let obj = JSON.parse(data);
        console.log(obj);
    }
});