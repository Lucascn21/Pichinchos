// EJEMPLO DEL USO DE LA FUNCIÓN MAP

// Declaro un array con algunos números
var listaOriginal = [12, 6, 8, 9, 5, 7];

// Creo un nuevo array que contiene los elementos del original elevados al cuadrado
var listaModificada = listaOriginal.map(valElemento => {
    return valElemento ** 2;
});

// Muestro el array original y el resultante
console.log(`${listaOriginal}\n${listaModificada}`);