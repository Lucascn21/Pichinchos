/*
 la interpolación permite utilizar cualquier expresión válida de JavaScript
 (como por ejemplo la suma de dos variables) 
 dentro de una cadena y obtener como resultado la cadena completa con la expresión evaluada.

 Las partes variables de una Template String se denominan placeholders 
 y utilizan la sintaxis ${ } para diferenciarse del resto de la cadena. Ejemplo:
*/

// esto es una Template String
var saludo = `¡Hola Mundo!`;

// esto es una cadena normal con comillas simples
var saludo = '¡Hola Mundo!';

// esto es una cadena normal con comillas dobles
var saludo = "¡Hola Mundo!";


// Sustitución simple de cadenas
var nombre = "Juan";
console.log(`¡Hola ${nombre}!`);



var a = 10;
var b = 10;
console.log(`¡JavaScript se publicó hace ${a+b} años!`);

// resultado => ¡JavaScript se publicó hace 20 años!

console.log(`Existen ${2 * (a + b)} frameworks JavaScript y no ${10 * (a + b)}.`);
// resultado => Existen 40 frameworks JavaScript y no 2000.