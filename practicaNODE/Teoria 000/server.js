const express = require('express');
const app = express();

app.use(express.static(__dirname + '/client'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/index.html');
});

app.get('/autores', (req, res) => {
    res.send(JSON.stringify(listaAutores));
})

app.get('/publicaciones', (req, res) => {
    res.send(JSON.stringify(listaPublicaciones));
})

app.listen(3000, () => {
    console.log("Server corriendo en puerto 3000...");
});

/***************************** */

const listaAutores = [
    {
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
]


const listaPublicaciones = [
    {
        idAutor: 16,
        id: 1,
        titulo: "Review de 1984 (George Orwell)",
        contenido: "Léanlo, maravilloso."
    },
    {
        idAutor: 53,
        id: 1,
        titulo: "¿Se puede vivir sin Instagram?",
        contenido: "Es pregunta"
    },
    {
        idAutor: 53,
        id: 1,
        titulo: "Review del último tema de Nicky Jam",
        contenido: "Este es mi review del último tema de Nicky Jam: es igual a todos los anteriores."
    },
    {
        idAutor: 99,
        id: 1,
        titulo: "¿Qué es el teléfono de línea?",
        contenido: "Nunca tuve, ¿alguien sabe?"
    },
    {
        idAutor: 99,
        id: 1,
        titulo: "Página de memes",
        contenido: "Entren a www.memelandia.com"
    },
    {
        idAutor: 99,
        id: 1,
        titulo: "Probando 123",
        contenido: "Haciendo un post de prueba de caracteres especiales: %$#%/#%$#!!!)=="
    },
    {
        idAutor: 122,
        id: 1,
        titulo: "Máximas del desarrollo #55",
        contenido: "Lo que llaman 'sistemas de control de versiones' en realidad son 'sistemas de control de programadorxs'."
    },
    {
        idAutor: 122,
        id: 1,
        titulo: "Máximas del desarrollo #38",
        contenido: "Los comentarios en el código salvan vidas."
    },
    {
        idAutor: 122,
        id: 1,
        titulo: "Máximas del desarrollo #3",
        contenido: "Todo se puede resolver de diez formas. 8 son vergonzosas."
    },
    {
        idAutor: 122,
        id: 1,
        titulo: "Máximas del desarrollo #165",
        contenido: "Todas las leyes de Murphy aplican en este trabajo. TODAS."
    }
]