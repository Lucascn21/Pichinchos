var pais = ['Mexico', 'España', 'Argentina', 'Chile', 'Colombia', 'Venezuela', 'Perú', 'Costa Rica'];
/*
En este ejemplo decimos que hemos declarado un array de 8 elementos.
 Cada elemento tiene un índice, comenzando los índices por el número 0. 
 Por tanto los 8 elementos del array anterior son:
pais[0], pais[1], pais[2], pais[3], pais[4], pais[5], pais[6] y pais[7].
También podemos inicializar un array vacío de dos formas distintas:
*/
var fruta = [];

var fruta = new Array();


pais.length;
pais.splice(" "); //Nota: "Desaparece" lo que le pongamos por parametro
pais.join("---")



//El método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
var animals = ['pigs', 'goats', 'sheep'];

console.log(animals.push('cows'));
// expected output: 4

console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens');

console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens"]


// El método pop() elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.

var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// expected output: "tomato"

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage"]


// El método shift() elimina el primer elemento del array y lo retorna. Este método modifica la longitud del array.
arr.shift();

//El siguiente código muestra el contenido del array miPescado antes y después de eliminar el primer elemento. También muestra el elemento eliminado:
var miPescado = ['ángel', 'payaso', 'mandarín', 'cirujano'];

console.log('miPescado antes: ' + miPescado);
// "miPescado antes: ángel,payaso,mandarín,cirujano"

var eliminado = miPescado.shift(); 

console.log('miPescado después: ' + miPescado); 
// "miPescado after: payaso,mandarín,cirujano" 

console.log('Elemento eliminado: ' + eliminado); 
// "Elemento eliminado: ángel


//El método unshift() agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array.

var array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// expected output: 5

console.log(array1);
// expected output: Array [4, 5, 1, 2, 3]
