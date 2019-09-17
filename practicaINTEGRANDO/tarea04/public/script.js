// Constantes de referencia a elementos del documento que ya están
// creados en el HTML inicialmente y que voy a usar varias veces
const divDiscos = document.getElementById("discos")
const divZoomTapa = document.getElementById("zoomTapa")
const divSombreado = document.getElementById("sombreado");

// Creo objeto XMLHttpRequest
let xhr = new XMLHttpRequest();

// Asigno callback de respuesta completa (se llamará cuando se reciba toda la información)
xhr.onload = function() {
    // Convierto el JSON de la respuesta en objeto y lo guardo en una variable
    let discos = JSON.parse(xhr.responseText);

    // Limpio el texto del div (que decía "Consultando datos....")
    divDiscos.textContent = "";

    // Recorro el objeto de la respuesta (que sé que es un array)
    discos.forEach(disco => {
        // El callback de forEach recibe como primer parámetro el elemento
        // que se está recorriendo (en este caso, un objeto)

        // Llamo a la función crearDivDisco pasando el objeto y el retorno de
        // dicha función se lo paso al divDiscos.appendChild para agregar el
        // elemento creado al DOM.
        divDiscos.appendChild(crearDivDisco(disco));
    });
}

// Abro conexión para request GET a la url de la API que retorna el JSON con discos
xhr.open("GET", "http://localhost:3000/discos");
// Envío el request
xhr.send();

// Pongo texto "Consultando datos...." para que se lea mientras espera respuesta.
divDiscos.textContent = "Consultando datos....";


/**
 * 
 * @param {object} datosDisco Datos del disco con la estructura:
 *                            {
 *                              artista: {string} Nombre del artista,
 *                              titulo: {string} Título del disco,
 *                              lanzamiento: {number} Año de lanzamiento,
 *                              tapa: {string} url de la imagen de tapa
 *                            }
 */
function crearDivDisco(datosDisco) {

    // Creo div para contener todos los elementos (este es el div que
    // al final de la función se retorna)
    let divResultado = document.createElement("div");

    // Asigno al div la clase contenedor-disco para estilarlo
    divResultado.classList.add("contenedor-disco");

    // Creo elemento <img>
    let imgTapa = document.createElement("img");
    // Le asigno como src de la imagen la url de la tapa
    imgTapa.src = datosDisco.tapa;
    // Le asigno un listener para el click
    imgTapa.addEventListener("click", () => {
        // Al hacer el click pongo como src de la imagen del div de zoom el mismo
        // src de la imagen clickeada...
        divZoomTapa.querySelector("img").src = imgTapa.src;
        // ... y quito la clase "oculto" (o sea, hago visible) al div de zoom y al sombreado
        divZoomTapa.classList.remove("oculto");
        divSombreado.classList.remove("oculto");
    })

    // Agrego la imagen en el div a retornar
    divResultado.appendChild(imgTapa);

    // Creo una lista (ul)
    let listaDatos = document.createElement("ul");

    // Creo tres items (li) y los pongo dentro de esa lista

    // Item artista
    let itemArtista = document.createElement("li");
    itemArtista.textContent = "Artista: " + datosDisco.artista;
    listaDatos.appendChild(itemArtista);

    // Item título
    let itemTitulo = document.createElement("li");
    itemTitulo.textContent = "Título: " + datosDisco.titulo;
    listaDatos.appendChild(itemTitulo);

    // Item año lanzamiento (que incluye un <a> dentro)
    let itemLanzamiento = document.createElement("li");
    itemLanzamiento.textContent = "Año lanzamiento: ";
    // Creo el elemento a
    let linkLanzamiento = document.createElement("a");
    linkLanzamiento.href = `http://es.wikipedia.org/wiki/${datosDisco.lanzamiento}`;
    linkLanzamiento.target = "_blank";
    linkLanzamiento.textContent = datosDisco.lanzamiento;
    // Agrego el <a> dentro del <li>
    itemLanzamiento.appendChild(linkLanzamiento);
    // Agrego el <li> dentro del <lu>
    listaDatos.appendChild(itemLanzamiento);

    // Agrego el <lu> dentro del <div> contenedor
    divResultado.appendChild(listaDatos);

    // Retorno ese div con todos los elementos
    return divResultado;

}


/**
 * Función alternativa a crearDivDisco con otra forma de resolución
 * 
 * @param {Object} datosDisco idem crearDivDisco
 */
function crearDivDiscoV2(datosDisco) {

    // Creo un elemento div para contener todo lo que estoy creando
    let divRespuesta = document.createElement("div");

    // Declaro una variable html y la inicializo con un string vacío
    let html = '';

    // Concateno valores en esa variable formando un pedazo de código HTML
    html += `<div class="contenedor-disco">`;
    html += `<img src="${datosDisco.tapa}">`;
    html += `<ul>`;
    html += `<li>Artista: ${datosDisco.artista}</li>`;
    html += `<li>Título: ${datosDisco.titulo}</li>`;
    html += `<li>Año lanzamiento: <a href="http://es.wikipedia.org/wiki/${datosDisco.lanzamiento}" target="_blank">${datosDisco.lanzamiento}</a></li>`;
    html += `</ul>`;
    html += `</div>`;

    // Asigno ese texto como HTML del div
    divRespuesta.innerHTML = html;

    // Asigno el callback de click al elemento imagen (como no tengo una variable para referirlo, uso
    // la función divRespuesta.querySelector("img"), que me va a traer el primer elemento "img" que encuentre dentro
    // de divRespuesta
    divRespuesta.querySelector("img").addEventListener("click", () => {
        divZoomTapa.querySelector("img").src = datosDisco.tapa;
        divZoomTapa.classList.remove("oculto");
        divSombreado.classList.remove("oculto");
    })

    // Retorno el div
    return divRespuesta;

}


/**
 * Función para cerrar el div de vista de zoom (está asignada al click en la X de cierre en el .html)
 */
function cerrarZoom() {
    // Asigna clase oculto (o sea, oculta) los divs de zoom y sombreado
    divZoomTapa.classList.add("oculto");
    divSombreado.classList.add("oculto");
}