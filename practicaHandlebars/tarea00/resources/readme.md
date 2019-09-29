# Live Playlist

Les dejo un archivo `live-playlist.json` que contiene un array de objetos, cada uno con la siguiente estructura:

```javascript
{
    artist: "string con nombre del artista",
    song: "string con nombre de la canción",
    videoId: "string con el código del video en YouTube"
}
```

Para este ejercicio vamos a utilizar un elemento de html nuevo: `iframe`. Un `iframe` es un elemento en el que podemos visualizar otra página. Es decir, es como tener una ventana de navegador dentro de otra. Le indicamos el origen (src) y esa página se carga dentro del iframe.

Para este caso nos sirve para poder construir una vista de un video de YouTube dentro de nuestra página. Si en cualquier lugar del cuerpo de la página (body) colocamos este elemento, podremos ver "embebido" en nuestra página el reproductor de YouTube:

```javascript
<iframe
    allowFullScreen="allowFullScreen"
    src="https://www.youtube.com/embed/k35vrbV_Z1E?ecver=1&amp;iv_load_policy=3&amp;rel=0&amp;yt:stretch=16:9&amp;autohide=1&amp;color=red&amp;width=560&amp;width=560"
    width="560"
    height="315"
    allowtransparency="true" frameborder="0">
</iframe>
```

_En este caso, "k35vrbV_Z1E" es el código del video que estamos insertando._

> Pueden usar la página youtubevideoembed.com para ver cómo generar distinto tipo de reproductores embebidos de YouTube.


#### Consigna

Les propongo que con esta información, y usando Express y Handlebars, resuelvan lo siguiente:

- Ej. Nivel I: armar una app con una sola vista que muestre todos los elementos de la playlist, poniendo artista, título del tema y el iframe con el reproductor embebido utilizando el código del video correspondiente. _(Pista: usar el #each)_
<br>
- Ej. Nivel II: una app con dos vistas, una inicial que tenga una lista de todas las canciones con "artista - título" y que cada elemento sea un `<a>` con un link a la otra vista donde solamente está el iframe con el video correspondiente. _(Pista: cada link debería apuntar a una ruta -digamos "/video"- y enviar por queryString el id del video a reproducir; ese link se construye tomando el elemento del array de la playlist también con el interpolado de handlebars)_
<br>
- Ej. Nivel III: una app con 2 vistas, una inicial con un formulario de búsqueda (preferentemente un `<form}>`) donde se pueda ingresar filtro para artista y para título, y con el resultado de ese filtrado se renderice la otra vista, donde se vean todos los videos (iframes) que coincidan. _(Pista: el form debería disparar un GET a alguna ruta que haga la búsqueda y luego renderice la lista de resultados)_
