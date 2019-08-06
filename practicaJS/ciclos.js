var i = 0; //Contador
console.log("WHILE de a 10 hasta 50");
while (i < 100) {
    console.log(i);
    //i++; //Va de a 1
    i += 10; //va de a 10
}
i = 0;
console.log("DO WHILE de a 2 hasta 50");
do {
    i +=2 //Va de a 2
    console.log(i);
} while (i < 50);

i = 0;
console.log("FOR de a 10 hasta 50");
for (i = 0; i < 50; i+=10) { 
    console.log(i);
  }