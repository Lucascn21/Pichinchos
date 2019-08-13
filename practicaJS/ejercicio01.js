/*
* Declarar una función con el nombre de suma
* Esta función retorna la suma de todos los parámetros que le pasen
* Dado que no sabemos cuantos parámetros nos van a pasar tenemos que pensar esta función como dinámica
* Ejecutar la función pasando 5 y después 10 números
* Mostrar en consola la suma de los 5 números
 Mostrar en consola la suma de los 10 números
 */


 function sumaMuestraTotal(){
     var sumaTotal=0;
    for (var i = 0; i < arguments.length; i++) {
        if(arguments[i]==undefined){
            arguments[i]=999; // esto es una prueba de escritorio personal
        }
         sumaTotal+=arguments[i];
        
      }
      console.log(sumaTotal);
 }

 sumaMuestraTotal(1, 10, 10, 10, 10); // 5 numeros, deberia dar 41
 sumaMuestraTotal(1, 10, 10, 10, 10, 10, 10, 10, 10, 10); // 10 numeros, deberia dar 91
 sumaMuestraTotal(1, 10, 10, 10, 10, 10, 10, 10, 10, undefined, 10); // 10 numeros, deberia dar 91+999=1090