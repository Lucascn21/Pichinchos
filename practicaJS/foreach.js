/*
Podemos iterar o recorrer un array utilizando el metodo forEach.
ESTE METODO ACEPTA UNA FUNCION COMO PARAMETRO.
LA FUNCION QUE LE PASAMOS A ESTE METODO RECIBE COMO PARAMETRO CADA UNO DE LOS ELEMENTOS DEL ARRAY.
*/

const alumnos = [`nico`, `pedro`, `natasha`, `emilia`, `jorge`]
//Recorre la coleccion de alumnos
alumnos.forEach(function (alumno) {
    console.log(alumno);

});

console.log("\n");

const mascotas = [`gato random`, `señora bigotes`, `rrope`, `gatubela`, `señor bigotes`]
// Podemos obtener otro parametro, que se ejecuta por cada elemento, el indice.
mascotas.forEach(function (mascota, indice) {
    console.log(mascota, indice);

});