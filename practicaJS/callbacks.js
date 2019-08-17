/**
 * Se conoce como CALLBACK cuando pasamos una funcion como parametro a otra funcion
 * Dado que ECMASCript es asyncronico, necesitamos una forma de saber si algo se termino de ejecutar o no
 * Este concepto es fundamental en ECMAScript, lo vamos a seguir viendo al utilizar JS tanto en browser como en node
 *  Utilizando CALLBACKS es una de las varias formas que hay de hacer que nuestro codigo se ejecute
 *  como si fuera sincronico cuando no lo es.
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


//mas ejemplos
let numeros = [1, 2, 3, 4, 5, 7, 8, 9, 10];


//Callback
console.log("\n");
numeros.forEach(function (numero) {
    console.log(numero);
});
//Callback
let numerosPares = numeros.filter(function (numero) {
    return numero % 2 === 0;
});
//Callback
let resultado = numeros.reduce(function (resultado, numero) {
    return resultado + numero;
})
//Callback
let numerosModificados = numeros.map(function (numero) {
    return numero + 10;
})

/**
 * Arriba estamos usando metodos de Arrays
 *
 * El primer metodo, al que le pasamos un callback, es un foreach al que le damos
 * una funcion anonima por parametro, la cual a su vez recibe por parametros a los elementos del array
 *
 * El segundo, filtra y devuelve true o false, por ende serian true los pares
 *
 * El tercero, reduce, recibe por parametros el numero anterior y el numero por el que se esta iterando dentro del array, en este caso retorna la suma total de elementos
 *
 * El cuarto retorna un array pero le suma 10 a cada elemento.
 */
