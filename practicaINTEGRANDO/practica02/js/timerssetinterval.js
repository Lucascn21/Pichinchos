setInterval / clearInterval
    /*
    Existe otra función que se llama setInterval que nos permite ejecutar una función múltiples veces cada una cantidad establecida de tiempo
    Es similar a setTimeout con la diferencia que se ejecuta múltiples veces
    Retorna un valor numérico que se utiliza como ID
    Ejemplo:
    */
const saludar = function() {
    console.log('hola');
}

const id = setInterval(saludar, 1000);
/*
En este caso se va a llamar a la función saludar cada 1 segundo
Este llamado se hace hasta que cortemos la ejecución
Podemos utilizar la función clearInterval para anular el llamado de setInterval
Ejemplo:
*/
const saludar = function() {
    console.log('hola');
}

const id = setInterval(saludar, 1000);

// se corta la ejecución
clearInterval(id);
/*
También podemos pasarle parámetros de la misma forma que a setTimeout
Ejemplo:
*/
const saludar = function(nombre, apodo) {
    console.log(`hola ${nombre} ${apodo}`);
}

setInterval(saludar, 1000, 'Marta', 'Martita');