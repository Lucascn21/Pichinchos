// Defino un "array de arrays", lo que podríamos definir como una matriz. Es un array cuyos elementos,
// a su vez, son arrays.
var datosPersonas = [
    ["Pepe", "López", "Av. Carabobo 123", 1410, "pepelopez@gmail.com"],
    ["Ana", "Pérez", "Av. Eva Perón 3456", 1402, ""],
    ["Claudia", , , ,"clauchau@gmail.com"],
    ["Armando", "González"]
]
​
/*
Definido así el array, podemos observar lo siguiente:
​
datosPersonales[0] -> ["Pepe", "López", "Av. Carabobo 123", 1410, "pepelopez@gmail.com"]
datosPersonales[0][0] -> "Pepe"
datosPersonales[3][1] -> "González"
etc.
*/
​
// Defino una variable para guardar los textos generados
var textoDatos;
​
// Recorremos el array como venimos haciendo, con un for, y para cada persona armamos y mostramos los datos
for (let i = 0; i < datosPersonas.length; i++) {
    /*
    Tengamos en cuenta que cada elemento del array es, a su vez, un array. En este punto, dentro
    del for, datosPersonas[i] es el array que está en la posición i del array datosPersonas (array
    dentro del otro array).
    */
​
    // Asigno a la variable textoDatos la respuesta de la función armarTextoDatos, a la que le
    // paso como parámetro el array de datos de la posición i
    textoDatos = armarTextoDatos(datosPersonas[i]);
​
    // Muestro por consola el texto formateado para la persona actual
    console.log(textoDatos);
}
​
​
/**
 * Función que arma un texto con los datos de la persona
 * 
 * @param {Array} datos Array con datos personales: [nombre, apellido, domicilio, código postal, e-mail]
 * 
 */
function armarTextoDatos(datos) {
​
    // Defino constantes para asignar los valores recibidos
    var nombre = datos[0];
    var apellido = datos[1];
    var email = datos[4]; // Las posiciones 2 y 3 no las uso.
​
    // Verifico nombre o asigno default
    if (nombre == undefined) {
        nombre = "<sin nombre>";
    }
​
    // Si no recibí apellido, lo pongo vacío
    if (apellido == undefined) {
        apellido = "";
    }
​
    // Si el email no se recibió o se recibió como texto vacío, le asigno un valor default
    if (email == undefined || email == "") {
        email = "<no informado>";
    }

       // Devuelvo string con los datos "formateados" para mostrar
       return `${nombre} ${apellido}, correo: ${email}`;
    }