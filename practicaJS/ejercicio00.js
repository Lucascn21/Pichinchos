/*
Habíamos hablado de las funciones split y join.
​
split es una función que se puede aplicar a un string (diríamos, técnicamente, que es
"una función del prototipo string"), que recibe como parámetro un separador y devuelve
como resultado un array, en el cual cada elemento es el resultado de dividir el string
en partes, separadas por el texto separador indicado. Ejemplos:
​
"1,2,3,4,5,6".split(",") -> [1, 2, 3, 4, 5, 6]
​
"Mi nombre es Cosme Fulanito".split(" ") -> ["Mi", "nombre", "es", "Cosme", "Fulanito"]
​
"hola".split("") -> ["h", "o", "l", "a"]
​
"cosmefulanito@gmail.com".split("@") -> ["cosmefulanito", "gmail.com"]
​
---------------------
Un ejemplo de código:
---------------------
​
var apeNom = "Fulanito,Cosme";
​
arrApeNom = apeNom.split(",");
​
console.log(`Nombre y apellido: ${arrApeNom[1]} ${arrApeNom[0]}`);
​
​
*****************************************************
​
Considerando eso, les propongo el siguiente ejercicio: partiendo del string que les dejo
definido, mostrar por consola, una debajo de la otra, cada una de las palabras que componen
el texto y la cantidad de caracteres que contiene. Adicionalmente, al final, si pueden,
indicar también cantidad de letras totales.
​
*/
var texto = 'JavaScript (abreviado comúnmente JS) es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos,​ basado en prototipos, imperativo, débilmente tipado y dinámico.'
var letrasTotales = 0;


arrTexto = texto.split(" ");

for (var i = 0; i < arrTexto.length; i++) {
    console.log(`${arrTexto[i]}: ${arrTexto[i].length}`);
    letrasTotales += arrTexto[i].length;
}

console.log(`\nTOTAL: ${letrasTotales}`);

/*
Resultado esperado:
​
JavaScript: 10
(abreviado: 10
comúnmente: 10
JS): 3
es: 2
un: 2
lenguaje: 8
de: 2
programación: 12
interpretado,: 13
.
.
(etc)
.
.
​
TOTAL: 189
​
*/