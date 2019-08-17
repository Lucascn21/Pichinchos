/**
 * Los objetos nos ayudan a representar valores de una manera mas facil y agrupada
 * Los objetos literales se escriben entre {}
 * 
 * {} // objeto literal.
 * const miObjeto={}; //Objeto asignado a una variable.
 * 
 */

 const miObjeto={};




 /**
  * Un objeto puede tener propiedades.
  * Las propiedades se definen con un nombre como si fueran variables.
  * A las propiedades se les puede ASIGNAR UN VALOR USANDO DOS PUNTOS.
  * Las propiedades se SEPARAN CON COMAS
  */

  const persona ={
nombre:"nico",
edad:38
  };

  console.log(persona);

//Podemos acceder a la propiedad de un objeto utilizando el nombre del objeto, punto y luego el nombre de la propiedad
console.log(persona.nombre);
console.log(persona.edad);

//Si intentamos acceder a una propiedad que no existe, nos retornada undefined, surprise surprise
console.log(persona.dni);

//Para asignar valor a una propiedad lo hacemos de la misma forma que lo hacemos con una variable
persona.nombre='cacho';
persona.edad='40';

console.log("\n debajo vemos que cambiaron las propiedades del objeto");
console.log(persona);




 /**

//TO-DO Corregir esto de abajo
var datos = {
    nombre: "kek",
    apellido: "bla",
    edad: 123,
    vive: true


}
function mostrarNombre() {

    console.log(nombre + " " + apellido)
}



datos.mostrarNombre();
*/


