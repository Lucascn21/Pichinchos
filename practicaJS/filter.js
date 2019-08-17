/* 
El metodo filter retorna un nuevo array utilizando un filtro
Pasamos una funcion que retorna verdadero o falso para saber si debemos añadir el nuevo elemento al nuevo array.

*/


const notas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const notasAprobado = notas.filter(function (nota) {
    return nota >= 4 && nota < 7;
});

const notasPromocionado = notas.filter(function (nota) {
    return nota >= 7;
});

const notasDesaprobados = notas.filter(function (nota) {
    return nota < 4;
});

console.log("Aprobados " + notasAprobado);
console.log("\n Promocionados " + notasPromocionado);
console.log("\n Reprobados " + notasDesaprobados);