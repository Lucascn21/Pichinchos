saludar(); //Retorna undefined
suma(2,5); //Funciona, retorna la suma de los numeros, tambien los muestra por consola
for(let i=0; i<5; i++){

    saludar("cacho  "); //Funciona
}







function saludar(nombre){ //El parametro recibido se llamara como se declare en esta parte
console.log(`hola ${nombre}\n`);

}



function suma(num1, num2){
    console.log(`${num1}+${num2}=${num1+num2}`);
    return num1+num2;

}