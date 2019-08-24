// Array de objetos con palabras y sus definiciones
const listaDefiniciones = [{
        palabra: "hola",
        definicion: "Saludo en español"
    },
    {
        palabra: "chau",
        definicion: "Despedida en español"
    },
    {
        palabra: "cacat",
        definicion: "Mierda en rumano"
    },
    {
        palabra: "ComIT",
        definicion: "ONG donde nacen programadorxs"
    },
    {
        palabra: "bura",
        definicion: "Hola en rumano"
    }
]

// Constante "global" donde guardamos referencia al div con id "contenedor".
const contenedor = document.getElementById("contenedor");



/**
 * Función que a partir de los datos del array "listaDefiniciones" crea botones
 * (uno por palabra) que al clickear muestran la definición en una ventana emergente.
 * 
 */
function crearBotonesDefiniciones() {

    // Primero vacío el div contenedor (si acaso tiene algo)
    contenedor.innerHTML = "";

    // Recorro el array con las definiciones...
    for (let i = 0; i < listaDefiniciones.length; i++) {

        // Para cada objeto del array, creo un elemento "button"
        let boton = document.createElement("button");

        // A ese elemento le pongo como texto de contenido la palabra
        boton.textContent = listaDefiniciones[i].palabra;

        boton.setAttribute("class", "boton palabra");
        // Y le asigno una función al evento click
        boton.onclick = function() {
            // Muestra ventana emergente con la definición
            alert(listaDefiniciones[i].definicion);
        }

        // Finalmente agrego el elemento creado al documento (dentro del div contenedor)
        contenedor.appendChild(boton);

    }

}