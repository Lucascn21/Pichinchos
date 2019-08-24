// DESARROLLO DE UNA FUNCIÓN PROPIA SIMILAR A ARRAY.MAP

// Declaro una lista con números
var listaOriginal = [12, 6, 8, 9, 5, 7];

// Ejecuto mi función "mapearArray" para crear otro array con los mismos elementos elevados al cuadrado
var listaModificada = mapearArray(listaOriginal, function(valElemento) {
    return valElemento ** 2;
});


/**
 * Retorna array nuevo aplicando la transformación indicada al array original
 * 
 * @param {Array} array Array original
 * @param {function} cbTransform Función (callback) transformadora
 *        (recibe valor, retorna valor transformado)
 */
function mapearArray(array, cbTransform) {

    // Declaro array vacío (para ir armando el array resultante)
    let listaNueva = [];

    // Recorro los elementos del array original
    for (let i = 0; i < array.length; i++) {
        // Genero el valor transformado, que es el original aplicando la función transformadora
        var valorNuevo = cbTransform(array[i]);
        // Agrego el valor nuevo al array resultante
        listaNueva.push(valorNuevo);
    }

    // Retorno el array resultante
    return listaNueva;
}

// Muestro array original y transformado
console.log(listaOriginal);
console.log(listaModificada);