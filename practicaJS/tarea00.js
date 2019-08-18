// Declaro objeto datos con lista de números al azar
var datos = {
    listaNumeros: generarListaRandom(),
}




//console.log(datos.listaMenorMayor);
/*recorra el array que está en `datos.listaNumeros` calculando mínimo y máximo valor, 
y guardando cada uno de esos valores en nuevas propiedades creadas en el objeto,
`datos.min` y `datos.max`.*/
console.log("Mi objeto datos en primera instancia:")
console.dir(datos);
console.log("\nRecorriendo el array del objeto, genero una lista llamada listaMenorMayor")
listaMenorMayor = generarListaMenorMayor(datos.listaNumeros)
console.dir(listaMenorMayor);
console.log("\n debajo muestro el objeto modificado, ahora posee min y max")
console.dir(datos);
console.log("\n debajo muestro solo mix y max, como pide la consigna, hice mi metodo mostrarDatos")
mostrarDatos(datos);

//Mando el objeto como parametro, lo modifico y el objeto retornado se guarda en datosMasMas
datosMasMas = recibeModificaMuestraObjeto(datos);




/**
 * Función que retorna un array de 100 números al azar
 * -----DEBERIAN SER 100 PERO LO BAJE A 10 PARA QUE SEA MAS COMODO DE LEER-----
 * @returns {Array} Lista de 100 números enteros al azar de 0 a 100
 */
function generarListaRandom() {
    var lista = [];
    for (let i = 0; i < 10; i++) {
        // En cada ejecución del for, agrego un número al azar con las funciones de Math explicadas antes.
        lista.push(Math.round(Math.random() * 10));
    }
    return lista;
}

/**
 * Función que retorna un array de 2 posiciones
 * 
 * @returns {Array} Lista de 2 numeros, siendo mayor la primera posicion y menor la segunda
 * 
 */
function generarListaMenorMayor(listaNumeros) {
    //console.log(listaNumeros);
    let mayor = listaNumeros.reduce(function (mayor, numero) {
        if (numero >= mayor) {
            mayor = numero;
        }
        return mayor;
    })
    let menor = listaNumeros.reduce(function (menor, numero) {
        if (numero <= menor) {
            menor = numero;
        }
        return menor;
    })
    datos.min = menor;
    datos.max = mayor;
    //estas dos lineas de abajo son importantes para mostrar por consola lo que pasa
    var lista = [mayor, menor];
    return lista;
}

function mostrarDatos(datos) {
    console.log(`\tEl minimo es ${datos.min} \n\tEl maximo es ${datos.max}`);
}

function recibeModificaMuestraObjeto(datos) {
    console.log("\nPunto 3 del ejercicio\n He recibido este objeto:")
    console.dir(datos);
    // mostrarPropiedadesObjectKeys();
    datos.avisoObjetoModificado = "Este es un objeto modificado";
    datos.esNuevoObjeto = true;
    datos.sumaMinMax = datos.min + datos.max;
    datos.minEsPar = datos.min % 2 === 0;
    datos.maxEsPar = datos.max % 2 === 0;
    console.log("\nMuestro objeto modifica2:")
    //mostrarPropiedadesObjectKeys();
    console.dir(datos);
    return datos;
    /* DEPRECATED, DESDE QUE DESCUBRI CONSOLE.DIR
        //Funcion dentro de funcion
        function mostrarPropiedadesObjectKeys() {
            propiedades = Object.keys(datos);
            propiedades.forEach(function (propiedad) {
                console.log(datos[propiedad]);
    
            })
            console.log("\n");
        }*/
}

