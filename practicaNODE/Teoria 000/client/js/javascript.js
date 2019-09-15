// Referencias a elementos que vamos a usar reiteradas veces
const divContenedorBotonesAutor = document.getElementById("div-contenedor-botones-autor");
const divContenedorListaPosts = document.getElementById("div-contenedor-lista-posts");

// Al inicial el script se consulta la lista de autores (es una consulta asincrónica, así
// que el hilo de ejecución global termina acá y sigue cuando retorne la consulta)
consultarListaAutores(listaAutores => {
    // Esta función es el callback de la consulta AJAX, que recibe listaAutores como parámetro

    // Se recorre la lista de autores y para cada uno se agrega un botón en el div creado antes
    listaAutores.forEach(autor => {
        agregarBotonAutor(autor.nombre, autor.id);
    });
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
        // Cuando haga click, voy a hacer la consulta de posts del autor con su id y mostrarlos
        verPostsAutor(id);
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
    consultarListaPostsAutor(idAutor, listaPostsAutor => {
        // Esta función es el callback de la consulta AJAX de posts del autor.

        // Recorro la lista recibida y para cada elemento armo un div con su título
        listaPostsAutor.forEach(post => {
            let div = document.createElement("div");
            div.classList.add("post");
            div.textContent = post.titulo;

            let p = document.createElement("p");
            p.textContent = post.contenido;
            p.classList.add("oculto");
            div.appendChild(p);

            div.addEventListener("click", () => p.classList.toggle("oculto"));

            // Agrego el div al otro div contenedor
            divContenedorListaPosts.appendChild(div);
        });
    });

}


/**
 * Consulta y devuelve la lista de posts para un autor
 *
 * @param {number} idAutor id del autor a consultar
 * @param {function} cbOk callback para llamar cuando estén los datos de respuesta, se le
 *                        pasa un único parámetro que contiene el array de posts
 *
 */
function consultarListaPostsAutor(idAutor, cbOk) {

    //Creo un objeto XMLHttpRequest
    let xhr = new XMLHttpRequest();

    /* xhr.addEventListener('load', (data) =>{*/
    //Asigno callback para cuando termine de llegar la respuesta 
    xhr.onload = () => {
        //Luego le paso la respuesta JSON que esta en un string a Objeto lo convierto con la funcion parse y
        //la guardo en una variable
        let dataJSON = JSON.parse(xhr.responseText);
        // console.log(dataJSON);
        let arrayFiltrado = dataJSON.filter(datos => datos.idAutor == idAutor);
        // cbOk(dataJSON);
        cbOk(arrayFiltrado);
    }

    // var dataJSON = JSON.parse(xhr.target.response);
    //Creo la solicitud utilizando el metodo GET y le indico la URL
    xhr.open('GET', 'http://localhost:3000/publicaciones');
    //Ejecuto la solicitud
    xhr.send();
    /*const list = document.getElementById('list');
    for(const recorrerDatos of dataJSON){
        const elemento = document.createElement('li');
        elemento.textContent =  `${recorrerDatos.id} - ${recorrerDatos.name}`
        list.appendChild(elemento);
    }*/

}


/**
 * Consulta y devuelve la lista de autores en un array
 *
 * @param {function} cbOk callback para llamar cuando estén los datos de respuesta, se le pasa
 *                        un único parámetro que contiene el array de autores, objetos de tipo:
 *                        {
 *                          id: {number} id del autor,
 *                          name: {string} nombre del autor
 *                        }
 */

function consultarListaAutores(cbOk) {

    // implementar consulta a https://my-json-server.typicode.com/rsegretin/json-data-pubs/autores
    // y retornar el array completo
    //Creo un objeto XMLHttpRequest
    let xhr = new XMLHttpRequest();

    xhr.onload = () => {
        var dataAutores = JSON.parse(xhr.responseText);
        cbOk(dataAutores);
    };

    xhr.open('GET', 'http://localhost:3000/autores');
    xhr.send();
}