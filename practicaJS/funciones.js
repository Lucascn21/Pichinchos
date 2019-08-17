saludar(); //Retorna undefined
suma(2, 5); //Funciona, retorna la suma de los numeros, tambien los muestra por consola  
total = suma(90, 10);
console.log(total);
for (let i = 0; i < 5; i++) {

    saludar("cacho  "); //Funciona
}







function saludar(nombre) { //El parametro recibido se llamara como se declare en esta parte
    console.log(`hola ${nombre}\n`);

}

//El orden de los parametros es importantex|
function suma(num1, num2) {
    console.log(`${num1}+${num2}=${num1 + num2}`);
    return num1 + num2;

}

function conseguirLaEdadDelUsuario() {
    return 30;
}

function usuariologgeado() {
    return true;
}

if (conseguirLaEdadDelUsuario >= 18) {
    console.log("El usuario es mayor a 18 años");
}

if (usuariologgeado) {
    console.log("Bienvenido usuario");
}

//Recordar que para hacer funciones dinamicas, una opcion es usar arguments, dentro del bloque de la funcion, para referirse a los argumentos
function sumaMuestraTotal() {
    var sumaTotal = 0;
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] == undefined) {
            arguments[i] = 999; // esto es una prueba de escritorio personal
        }
        sumaTotal += arguments[i];

    }
    console.log(sumaTotal);
}