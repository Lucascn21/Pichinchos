/**
 * Los objetos pueden tener metodos
 * Un metodo es una propiedad que tiene una funcion
 * 
 */

 const persona={
 nombre: "nico",
 saludar: function(){
     console.log("Hola, como estan?");
 },
 //Un metodo de nuestro objeto puede aceptar parametros
 despedir: function(nombre){
    console.log("Chau "+nombre);
},

imponerNombre: function(){
    console.log("El nombre de mi objeto es "+this.nombre);
}
 }
 /**
  * Como podemos ver, nombre y saludar son dos propiedades iguales
  * Nombre tiene asignado un String
  * Saludar tiene asignada una funcion!
  */


 persona.saludar();
 persona.despedir("miguel");

 /**
  * Notar que utilizar un metodo es muy similar a una funcion
  * Un metodo es una funcion dentro de un objeto
  * 
  * 
  * DENTRO DE LOS METODOS PODEMOS ACCEDER A LAS PROPIEDADES DEL OBJETO POR MEDIO DE
  *  LA PALABRA RESERVADA THIS
  * PODEMOS DECIR QUE THIS ES UNA REFERENCIA AL OBJETO QUE CREAMOS
  */
 persona.imponerNombre();

 
