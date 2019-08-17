

/**
 * Propiedades dinamicas de un objeto.
 * Puede pasar que no sabemos el nombre de una propiedad y necesitemos acceder de forma dinamica.
 * Podemos acceder a las propiedades utilizando los corchetes como si fueran arrays, 
 *  pero en lugar de pasarle un indice numero, le pasamos el nombre de la propiedad.
 * 
 * 
 */

 const persona={
     nombre: 'nico',
     edad: 38,
     saludar:function(){
         console.log("hola mi nombre es "+this.nombre);
     },
     cumpleanios:function(){
         this.edad++;
     }
 }
//Notar que es similar a acceder a un array
 console.log(persona['nombre']); //Nico
 console.log(persona['edad']);   //Edad

//Usando variables
const nombre = 'nombre';
const edad = 'edad';
console.log(persona[nombre]); //Nico
console.log(persona[edad]);   //Edad
console.log("\n");

/**
 * De la forma descrita arriba podemos acceder a las propiedades de un objeto de forma dinamica
 * ESTO ES UTIL SI LO USAMOS CON Object.keys
 * Object.keys retorna todas las propiedades de un objeto
 * El metodo keys acepta UN OBJETO como parametro
 */

 var propiedades = Object.keys(persona); //Lo hice variable para modificarlo en la linea 50

 propiedades.forEach(function(propiedad){
   console.log(persona[propiedad]);

 })
 
persona.dni=20202202;
persona.calle="alfa 232"

//Si agregamos mas propiedades, el codigo sigue pudiendo acceder a las mismas de forma dinamica
 propiedades = Object.keys(persona);
 

 propiedades.forEach(function(propiedad){
    console.log(persona[propiedad]);
 
  })