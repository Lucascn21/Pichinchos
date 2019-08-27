let inputTexto = document.getElementById("usuario")
    //inputTexto.value inputTexto.type
let inputContraseña = document.getElementById("contraseña")

let inputCasilla = document.getElementById("casilla")
inputCasilla.checkValidity;


function clickCheck() {
    if (inputCasilla.checked) inputContraseña.type = "text"
    else inputContraseña.type = "password"
    alert("clickeado");
}
/*
var d1 = new Date().toLocaleString();
var d2 = new Date().toDateString();
alert(d1);
alert(d2);
*/
document.getElementById('fecha').valueAsDate = new Date();


//Solo el nombre o definir funcion anonima en los parametros del listener
inputCasilla.addEventListener("click", funcion); //Solo el nombre o definir funcion anonima
inputCasilla.addEventListener("click", () => { /*aca mi funcion*/ });