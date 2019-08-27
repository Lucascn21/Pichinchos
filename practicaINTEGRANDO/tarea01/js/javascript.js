// Referencias a elementos que vamos a usar reiteradas veces
const divContenedorBotonesAutor = document.getElementById("div-contenedor-botones-autor");
const divContenedorListaPosts = document.getElementById("div-contenedor-lista-posts");

// Se define array ("global") para la lista de autores
var listaAutores = [];

// Cuando inicia el escript, se consulta lista de autores y se guarda en el array
listaAutores = consultarListaAutores();

// Se recorre la lista de autores y para cada uno se agrega un botón en el div creado antes
for (let i = 0; i < listaAutores.length; i++) {

    agregarBotonAutor(listaAutores[i].nombre, listaAutores[i].id)

}


/*
FIN DEL SCRIPT INICIAL (lo que sigue son definiciones de funciones)

Las funciones que se definen son:

- agregarBotonAutor(nombre, id): Agrega un botón para acceder a los posts del autor indicado
- verPostsAutor(idAutor): Consulta y muestra los posts creados por el autor indicado
- consultarListaAutores: Consulta y devuelve la lista de autores en un array
- consultarListaPostsAutor(idAutor): Consulta y devuelve la lista de posts para un autor

*/







/**
 * Agrega un botón para acceder a los posts del autor indicado
 *
 * @param {string} nombre nombre del autor
 * @param {number} id id del autor
 *
 */
function agregarBotonAutor(nombre, id) {

    /* TODO:
        Escribir ("implementar") esta función, que recibe nombre y id del autor y crea un nuevo botón,
        cuyo texto (content) es el nombre del autor, y cuyo evento "click" invoca a la función "verPostsAutor(idAutor)"
        pasándole como parámetro el id del autor en cuestión. Agregar la clase "boton-autor" al nuevo botón, y
        ubicar ese botón dentro del divContenedorBotonesAutor (referencia declarada en las primeras líneas).
    */

    let boton = document.createElement("button");

    boton.textContent = nombre;

    boton.setAttribute("class", "boton-autor");
    // Y le asigno una función al evento click
    boton.onclick = function() {
            verPostsAutor(id);
        }
        // Finalmente agrego el elemento creado al documento (dentro del div contenedor)
    divContenedorBotonesAutor.appendChild(boton);
}






/**
 * Consulta y muestra los posts creados por el autor indicado
 *
 * @param {number} idAutor id del autor a consultar
 *
 */
function verPostsAutor(idAutor) {

    /* TODO:
        Implementar esta función, que recibe como parámetro el id de un autor, busca los títulos de sus
        posteos y los muestra. Cada posteo será un nuevo elemento div, con la clase "post", agregado
        dentro del divContenedorListaPosts. Antes que nada, la función tiene que vaciar el div contenedor
        para que solo se vean los divs que corresponden al autor consultado.
    */

    divContenedorListaPosts.innerHTML = "";
    listaPostsAutor = consultarListaPostsAutor(idAutor);

    for (let i = 0; i < listaPostsAutor.length; i++) {
        let div = document.createElement("div");





        div.setAttribute("class", "post");
        // div.innerText = listaPostsAutor[i].titulo;
        div.textContent = `Titulo: ${listaPostsAutor[i].titulo} Contenido: "${listaPostsAutor[i].contenido} "`;


        divContenedorListaPosts.appendChild(div);


    }
}






/**
 * Consulta y devuelve la lista de posts para un autor
 *
 * @param {number} idAutor id del autor a consultar
 *
 * @return Array de posts para el autor, en objetos con el formato {id, titulo, contenido}
 *
 */
function consultarListaPostsAutor(idAutor) {

    // Por ahora se devuelven datos de ejemplo, variables según el id consultado

    // Variable auxiliar para generar un id autoincremental
    var id = 1;

    var respuesta = [];

    switch (idAutor) {

        case 16:
            respuesta.push({
                id: id++,
                titulo: "Review de 1984 (George Orwell)",
                contenido: "Léanlo, maravilloso."
            });
            break;

            // Un par de ejemplos se dejan con retorno vacío (o sea, como que no tienen posts relacionados)
        case 53:
        case 83:
            break;

        case 99:
            respuesta.push({
                id: id++,
                titulo: '¿Qué es el teléfono de línea"?',
                contenido: "Nunca tuve, ¿alguien sabe?"
            });
            respuesta.push({
                id: id++,
                titulo: "Página de memes",
                contenido: "Entren a www.memelandia.com"
            });
            respuesta.push({
                id: id++,
                titulo: "Probando 123",
                contenido: "Haciendo un post de prueba de caracteres especiales: %$#%/#%$#!!!)=="
            });
            break;

        case 108:
            respuesta.push({
                id: id++,
                titulo: "¿Se puede vivir sin Instagram?",
                contenido: "Es pregunta"
            });
            respuesta.push({
                id: id++,
                titulo: "Review del último tema de Nicky Jam",
                contenido: "Este es mi review del último tema de Nicky Jam: es igual a todos los anteriores."
            });
            break;

        case 122:
            respuesta.push({
                id: id++,
                titulo: "Máximas del desarrollo #55",
                contenido: 'Lo que llaman "sistemas de control de versiones" en realidad son "sistemas de control de programadores".'
            });
            respuesta.push({
                id: id++,
                titulo: "Máximas del desarrollo #38",
                contenido: "Los comentarios en el código salvan vidas."
            });
            respuesta.push({
                id: id++,
                titulo: "Máximas del desarrollo #3",
                contenido: "..."
            });
            respuesta.push({
                id: id++,
                titulo: "Máximas del desarrollo #165",
                contenido: "....."
            });
            break;

            // Si viene otro id, no se agregan resultados
        default:
            break;

    }

    console.log(respuesta);

    return respuesta;

}





/**
 * Consulta y devuelve la lista de autores en un array
 *
 * @return Array de autores. Cada elemento es un objeto {id, nombre}
 *
 */
function consultarListaAutores() {

    // Por ahora la función devuelve un objeto de ejemplo
    return [{
            id: 16,
            nombre: "Charles Darwin"
        },
        {
            id: 53,
            nombre: "Silvio Rodríguez"
        },
        {
            id: 83,
            nombre: "Aretha Franklin"
        },
        {
            id: 99,
            nombre: "Gabriela Sabatini"
        },
        {
            id: 108,
            nombre: "Ernesto Guevara"
        },
        {
            id: 122,
            nombre: "Eleonor Rigby"
        }
    ];

}