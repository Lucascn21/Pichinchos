function saludar(nombre){ //El parametro recibido se llamara como se declare en esta parte
console.log(`hola ${nombre}\n`);

}


saludar(); //Retorna undefined
for(let i=0; i<5; i++){

    saludar("cacho  "); //Funciona
}