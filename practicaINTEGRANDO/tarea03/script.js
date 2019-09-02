const divContenedor = document.getElementById("discoDummy");
const alertamon = document.getElementById("añoLanzamiento")


const discos = [{
        "artista": "The Beatles",
        "titulo": "Abbey Road",
        "lanzamiento": 1968,
        "tapa": "https://www.udiscovermusic.com/wp-content/uploads/2017/08/Abbey-Road.jpg"
    },
    {
        "artista": "The Rolling Stones",
        "titulo": "Flashpoint",
        "lanzamiento": 1991,
        "tapa": "https://stonesplanetbrazil.com/wp-content/uploads/2017/01/flash.jpg"
    },
    {
        "artista": "Collective Soul",
        "titulo": "Live",
        "lanzamiento": 2017,
        "tapa": "https://direct.rhapsody.com/imageserver/images/alb.281495204/500x500.jpg"
    },
    {
        "artista": "Pearl Jam",
        "titulo": "Ten",
        "lanzamiento": 1991,
        "tapa": "https://img.cdandlp.com/2017/10/imgL/118972369.jpg"
    },
    {
        "artista": "Queen",
        "titulo": "A Night at the Opera",
        "lanzamiento": 1975,
        "tapa": "https://www.elquintobeatle.com/wp-content/uploads/2015/12/queen-a-night-at-the-opera-1.jpg"
    },
    {
        "artista": "Arcade Fire",
        "titulo": "Everything Now",
        "lanzamiento": 2017,
        "tapa": "http://images.coveralia.com/audio/a/Arcade_Fire-Everything_Now-Frontal.jpg"
    }
];

function muestraDatosTapa(discos) {
    var i = 2;
    var original = divContenedor; //Me parecio mas legible cambiarle el nombre.

    /* preparo las variables que voy a usar para rellenar los <p> */
    var artista = document.getElementById("nombreArtista");
    var titulo = document.getElementById("tituloDisco");
    var lanzamiento = document.getElementById("añoLanzamiento");
    var tapa = document.getElementById("tapa");






    //Recorro cada elemento de discos
    for (let elements of discos) {
        //console.dir(discos);
        //console.dir(elements);

        // por cada elemento de discos, separo el valor de la propiedad, no supe como manejar mejor las propiedades de un array de objetos adentro de un objeto
        for (var key in elements) {
            //console.dir(elements); //El objeto que contiene las propiedades
            //console.dir(key);//key es el string correspondiente a la propiedad sobre la que este iterando
            //var value = elements[key]; //valor especifico de la propiedad del elemento que se itera
            //console.log("value es " + value);

            /*
            console.log(artista.textContent + " / " + titulo.textContent + " / " + lanzamiento.textContent);
            console.log("Artista: " + elements["artista"]);
            console.log("Titulo: " + elements["titulo"]);
            console.log("Lanzamiento: " + elements["lanzamiento"]);
            console.log(" ");
            */

            //Le asigno el valor de la propiedad a su elemento correspondiente
            artista.textContent = elements['artista'];
            titulo.textContent = elements['titulo'];
            lanzamiento.textContent = elements['lanzamiento'];
            tapa.src = elements['tapa'];



        }

        //Una vez que mi nodo original fue modificado, le creamos un clon y lo appendeamos(?) al padre del original. 
        var clon = original.cloneNode(true); // mi clon
        clon.id = `disco ${titulo.textContent}`; // cambiar id para que no se repita en el html


        original.parentNode.appendChild(clon); //No me acuerdo por que termine haciendo esto de esta manera. Podria appendearlo(?) directamente al padre

    }







}

//al hacer click en la foto de la tapa, guardamos la referencia a la misma, la cambiamos y la mostramos.
function abrirFoto(event) {
    //event.target.innerText devuelve el contenido del elemento que activa el evento, en nuestro caso sera un año con el formato YYYY
    //window.open(event.target.getAttribute('src'));
    var imagen = document.getElementById("imagenAlFrente");
    imagen.src = event.target.getAttribute('src');
    imagen.hidden = false;


}


//Al clickear en el año en el html, te lleva a la wiki a ver que pasaba
function enviarAWiki(event) {
    //event.target.innerText devuelve el contenido del elemento que activa el evento, en nuestro caso sera un año con el formato YYYY
    window.open(`https://en.wikipedia.org/wiki/${event.target.innerText}`);
}

muestraDatosTapa(discos)