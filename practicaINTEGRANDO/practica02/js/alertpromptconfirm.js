/*
Interactuar con el usuario
Los browsers tienen un objeto llamado window que representa la ventana del navegador
Este objeto tiene 3 métodos que nos permiten interactuar con el usuario: alert, prompt y confirm
Estos métodos son muy comunes por lo cual los browsers tienen ya una referencia para poder utilizarlos como funciones
Todas estas funcionalidades bloquean el documento hasta que se resuelvan
Ejemplo:
*/


window.alert(); //Función alert muestra un mensaje en pantalla al usuario. Acepta como parámetro el mensaje que le queremos mostrar al usuario

/*
La función prompt nos permite pedirle un dato al usuario
Este método acepta un mensaje que será mostrado al usuario
Retorna un string con el valor ingresado por el usuario
*/
window.prompt();

/*Lafunción confirm nos permite pedirle al usuario que acepte o cancele una acción
Este método acepta un mensaje que será mostrado al usuario
Retorna un valor boolean true si el usuario confirma la acción y false si la cancela*/
window.confirm();

// o como funciones
alert();
prompt();
confirm();