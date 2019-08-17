/**
 * Se conoce como CALLBACK cuando pasamos una funcion como parametro a otra funcion
 * Dado que ECMASCript es asyncronico, necesitamos una forma de saber si algo se termino de ejecutar o no
 */

//Ejemplo
// Declaramos la funcion hacerAlgo, que espera otra funcion como parametro.
// hacerAlgo ejecuta lo que tenga en su bloque y luego la funcion que se le paso por parametro.
function hacerAlgo(funcionComoParametro) {
    console.log('hacer algo');
    funcionComoParametro();
}

let termino = function () {
    console.log('termino');
}

hacerAlgo(termino);


/**
 * Conceptos importantes de CALLBACKS
 *  Un callback es una funcion que se pasa como parametro.
 *  Una funcion termina llamando a otra funcion que le pasaron como parametro.
 *  Un callback puede recibir uno o muchos parametros tambien
 *  
 */

let numero = 0;

let resultadoSuma = function (resultado) {
    console.log(resultado);
}

function sumar(n, callback) {
    n++;
    callback(n);
}

sumar(numero, resultadoSuma); //1
console.log(numero);          //0