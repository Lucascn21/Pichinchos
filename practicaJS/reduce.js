/*
El metodo reduce nos permite recorrer un array y obtener un solo dato como resultado final.
La funcion que le hacemos, se ejecuta por cada elemento del array.
Acepta una funcion con dos parametros:
  El primer parametro es el acumulador.
  El segundo valor es cada item del array.
Hay mas parametros opcionales.
*/

const notas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Podemos utilizar el acumulador para ir sumando valores, por ejemplo:
const sumaDeNotas=notas.reduce(function(total, nota){
 return total+nota;

});



const restaDeNotas=notas.reduce(function(total, nota){
    //console.log(total+" menos "+nota)
    //console.log("\n")
    return total-nota;
   
   });

  // console.log(sumaDeNotas);
   console.log(restaDeNotas);