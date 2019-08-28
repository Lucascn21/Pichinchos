// Referencias a elementos que vamos a usar reiteradas veces
const divContenedorBotonesAutor = document.getElementById("div-contenedor-botones-autor");
const divContenedorListaPosts = document.getElementById("div-contenedor-lista-posts");
let parrafoContenido = document.createElement("p");

// Se define array ("global") para la lista de autores
var listaAutores = [];

// Cuando inicia el escript, se consulta lista de autores y se guarda en el array
listaAutores = consultarListaAutores();

// Se recorre la lista de autores y para cada uno se agrega un botón en el div creado antes
listaAutores.forEach(function(autor) {
    agregarBotonAutor(autor.nombre, autor.id)
});




/**
 * Agrega un botón para acceder a los posts del autor indicado
 *
 * @param {string} nombre nombre del autor
 * @param {number} id id del autor
 *
 */
function agregarBotonAutor(nombre, id) {

    // Creo botón y guardo una referencia para manipularlo
    let boton = document.createElement("button");

    // Le asigno texto y una clase
    boton.textContent = nombre;
    boton.classList.add("boton-autor");

    // Y le asigno una función al evento click
    boton.addEventListener("click", () => {
        // Cuando haga click, voy a hacer la consulta de posts del autor con su id
        verPostsAutor(id);
        //Al clickear en un autor, oculto mi <P> porque no todos tienen titulos, no es necesario mostrar el espacio para un parrafo
        parrafoContenido.hidden = true;
    });
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

    // Vacío el contenido del div de posts
    divContenedorListaPosts.innerHTML = "";

    // Consulto la lista de posts del autor indicado
    listaPostsAutor = consultarListaPostsAutor(idAutor);

    // Recorro la lista recibida y para cada elemento armo un div con su título
    listaPostsAutor.forEach(post => {
        let div = document.createElement("div");
        div.classList.add("post");
        div.textContent = post.titulo;

        //Al hacer click en un titlo, pongo el contenido en mi <P> y le asigno falso al boolean hidden
        div.addEventListener("click", () => {
            parrafoContenido.textContent = post.contenido;
            parrafoContenido.hidden = false;
        });
        // Agrego el div al otro div contenedor
        divContenedorListaPosts.appendChild(div);
    });

    /*Agrego un <P> en blanco para modificarle el texto al clickear el titulo. 
    Me parece el mejor lugar para appendearlo(? 
    porque en este mismo onclick limpiamos el innerhtml del div*/
    divContenedorListaPosts.appendChild(parrafoContenido);
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
            break;

        case 122:
            respuesta.push({
                id: id++,
                titulo: "Máximas del desarrollo #55",
                contenido: 'Lo que llaman "sistemas de control de versiones" en realidad son "sistemas de control de programadorxs".'
            });
            respuesta.push({
                id: id++,
                titulo: "Máximas del desarrollo #38",
                contenido: "Los comentarios en el código salvan vidas."
            });
            respuesta.push({
                id: id++,
                titulo: "Máximas del desarrollo #3",
                contenido: "Todo se puede resolver de diez formas. 8 son vergonzosas."
            });
            respuesta.push({
                id: id++,
                titulo: "Máximas del desarrollo #165",
                contenido: "Todas las leyes de Murphy aplican en este trabajo. TODAS."
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