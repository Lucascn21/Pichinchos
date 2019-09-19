const express = require('express');
const app = express();
/*

GET "/discos" que retorne este JSON que mencioné.
También, claro, modifiquen el script.js de la página para que en lugar de consultar a my-json-server.typicode.com consulte a su api localhost:XXXX/discos

Cosas importantes:
1. Recomiendo que los archivos del cliente (es decir, los del zip que mandé) los pongan en una carpeta separada (típicamente "client")
2. Recuerden que cuando el navegador cargue el index.html (cosa que debería pasar cuando uds. accedan a la ruta raíz, localhost:XXXX) va a querer ir a buscar el script.js y el style.css, y para poder encontrarlos va a necesitar que Express tenga configurada la ruta de recursos estáticos.
3. El servidor lo pueden correr en cualquier puerto que les pinte (siempre > 1024, sugiero > 3000)
4. Recuerden que si hacen cambios en el .js donde levanta Express, tienen que reiniciar el servidor.
*/
app.use(express.static(__dirname + '/public')); //cuando te venga un pedido de un archivo estatico, anda a buscarlo a la carpeta public

//GET "/" que retorne la página index.html
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');


});
app.get('/discos', (req, res) => {


    res.sendFile(__dirname + '/recursos/discos.json');

})


app.listen(3000, () => {
    console.log("Server corriendo en puerto 3000... http://localhost:3000");
});

/***************************** */