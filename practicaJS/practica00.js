var frase = " La tierra vive.";

console.log(`La frase es: ${frase}`);

var listaPalabras = frase.split(" ");
//`` se hace ctrl alt / altGR y la tecla que esta lindante al enter (en este teclado de la notebook)
console.log(`La lista de palabras tiene: ${listaPalabras.length}`);
console.log(`Contiene la palabra tierra?: ${listaPalabras.includes("tierra")}`);
console.log(`Contiene la palabra papa?: ${listaPalabras.includes("papa")}`);
console.log(`---Agregamos la palabra papa  `);
listaPalabras.push("papa");
console.log(`Contiene la palabra papa?: ${listaPalabras.includes("papa")}`);
console.log(`--- Quitamos la palabra papa  `);
listaPalabras.pop("papa");
console.log(`Contiene la palabra papa?: ${listaPalabras.includes("papa")}`);
