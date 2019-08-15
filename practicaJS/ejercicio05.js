// DECLARO VARIABLES:
var listaNumeros = [];
var menoresDe25 = 0;
var menoresDe50 = 0;
var menoresDe75 = 0;
var menoresDe100 = 0;
var sumaTotal = 0;
var promedio;


// LLAMADA A FUNCIONES:
listaNumeros = generarListaRandom();
recorrerListaNumeros(listaNumeros);
promedio = promediarTotal(sumaTotal);
mostrarResultado(); 

// FUNCIONES:
function generarListaRandom() {
    var lista = [];
    for (let i = 0; i < 100; i++) {
        lista.push(Math.round(Math.random() * 100));
    }
    return lista;
}

function clasificarNumeros(numero) {
    if (numero < 25) {
        menoresDe25++;
    } else if (numero < 50) {
        menoresDe50++;
    } else if (numero < 75) {
        menoresDe75++;
    } else {
        menoresDe100++;
    }
}

function sumarNumeros(numero) {
    sumaTotal += numero;
}

function recorrerListaNumeros(lista) {
    for (let i = 0; i < lista.length; i++) {
        clasificarNumeros(lista[i]);
        sumarNumeros(lista[i]);
    }
}

function promediarTotal(numero) {
    return numero / 100;
}

function mostrarResultado() {
    console.log(`0-25: ${menoresDe25}\n25-50: ${menoresDe50}\n50-75: ${menoresDe75}\n75-100: ${menoresDe100}\nPromedio: ${promedio}`);
}
