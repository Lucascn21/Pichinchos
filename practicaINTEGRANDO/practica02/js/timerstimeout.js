/*
setTimeout / clearTimeout
Esta función se utiliza cuando queremos que nuestro código se ejecute una sola vez en un tiempo establecido
Acepta como primer parámetro la función que queremos que se ejecuta
El segundo parámetro acepta un valor numérico con la cantidad de milisegundos que queremos esperar para ejecutar la función pasada como primer parámetro
Ejemplo:
*/
const saludar = function() {
    console.log('hola');
}

setTimeout(saludar, 5000);
/*
En este ejemplo establecemos que queremos ejecutar la función saludar dentro de 5 segundos una sola vez
Si queremos podemos no utilizar la variable saludar y pasar la función anónima directamente
Ejemplo:
*/
setTimeout(function() {
    console.log('hola');
}, 5000);
/*
Esta función retorna un valor numérico que es el ID
Podemos cortar la ejecución de este setTimeout utilizando la función clearTimeout
Esta función espera un valor numérico como parámetro
Ejemplo:
*/
var idTimeOut = setTimeout(function() {
    console.log('hola');
}, 5000);

// Cortamos la ejecución
clearTimeout(idTimeOut)
    /*
    En algunos casos podemos necesitar tener que pasarle parámetros a la función que se va a ejecutar
    Esta función acepta todos los parámetros que queremos de la segunda posición en adelante y los pasa como parámetros de la función que se ejecuta
    Ejemplo:
    */
const saludar = function(nombre, apodo) {
    console.log(`hola ${nombre} ${apodo}`);
}

setTimeout(saludar, 5000, 'Marta', 'Martita');
//En este ejemplo vemos que podemos pasarle más de un parámetro a la función saludar desde la función setTimeout