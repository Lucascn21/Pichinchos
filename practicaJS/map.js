/*
El metodo map crea un nuevo array con el resultado de la funcion que le pasamos como parametro.
Podemos utilizar este metodo para cambiar los valores que tenemos en un array.
En la funcion que pasamos como parametro tenemos que retornar el elemento que queres en el nuevo array.
EL METODO ORIGINAL QUEDA INTACTO.
*/

const mascotas = [`Ana`, `Pablo`, `Juan`, `Pepe`, `Victor`];
const mascotasMayuscula = mascotas.map(function (mascota) {
    return mascota.toUpperCase();
});
console.log(mascotas);
console.log(mascotasMayuscula);
