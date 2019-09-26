# Primer app con Handlebars

Una versión básica de consulta de discos según la información en un archivo (discos.js) utilizando handlebars para las vistas.

### Los archivos:

- **server.js**: Archivo que ejecutamos para iniciar el servidor, que lo inicia y define todos los callbacks de requests.

- **package.json**: El archivo JSON que tiene los datos descriptivos del proyecto y la información de las librerías que necesita para funcionar. Lo utiliza "npm" para buscar dependencias. Puede tener definidos "scripts" que podemos ejecutar con `npm run nombre_del_script`

- **discos.json**: Archivo JSON con información de discos (nuestro origen de datos para este ejemplo)

- **/public**: carpeta que contiene todos los archivos "estáticos" que pueden ser requeridos desde el cliente, como imágnees, hojas de estilo o archivos de script del cliente (.js vinculados desde algún html). Esta es, por lo tanto, la ruta base de archivos estáticos y la que tenemos que configurar en nuestro servidor (la configuración de `app.use(express.static(....))`)

- **/public/img**: carpeta con todas las imágenes

- **/public/styles**: carpeta con las hojas de estilo (CSS)

- **/views**: carpeta donde ponemos las "vistas" de handlebars. Esta carpeta es una de las configuraciones que requiere express-handlebars (la configuramos con `app.set('views', ruta_de_vistas)`)

- **/views/discos.handlebars**: plantilla (template) handlebars para la página que tiene los resultados de una búsqueda de discos.

- **/views/home.handlebars**: plantilla para la página inicial con búsqueda.

- **/views/layout**: carpeta donde ponemos los layouts. Por ahora vamos a usar siempre uno solo. Esta carpeta también hay que especificarla para express-handlebars (en la configuración `layoutsDir: ruta_de_layouts`).

- **/views/layout/main.handlebars**: plantilla de layout. Esta carpeta también se configura (`defaultLayout: nombre_del_layout`)


### Cómo funciona la app

Con el servidor iniciado, podemos abrir el navegador e ir a "localhost:5000", que dispara el "GET" a "/" y nos trae la página inicial (un render de la vista 'home').

Esa página tiene dos filtros y un botón de buscar, que toma los valores de esos filtros (los inputs) y con esos valores arma una url con los filtros como _query string_.

Si no hay nada en los filtros, la url termina siendo `/discos?` (que es lo mismo que `/discos`, no cambia nada y es más fácil la lógica de armado de la url en el script dejando ese signo de pregunta). Si hay filtro por año de lanzamiento agrega `lanzamiento=valor_del_input_lanzamiento` y si se pone algo en artista agrega `artista=valor_del_input_artista`. Si se usan ambos filtros, se agregan los dos separados por `&`.

El servidor recibe la consulta "GET" a la url armada con los filtros, por ejemplo `/discos?artista=Queen` (es la ruta relativa, la absoluta sería `http://localhost:5000/discos?artista=Queen`, pero conviene usar la relativa que se mantiene igual aunque cambiemos de ubicación al servidor o el puerto), busca los datos, los filtra y devuelve la página con los resultados (un render de la vista 'discos' que usa la información del array que le pasamos).


### Cómo funciona el renderizado de Handlebars

Las respuestas que estamos armando son páginas (HTML) que se arman en el servidor. Esas páginas se arman (cuando ejecutamos el `render`) a partir de insertar una **vista** dentro de un **layout** y combinar ("interpolar") información que enviamos como datos.

Por ejemplo, cuando en el request de la página inicial (GET /) hacemos:
```javascript
res.render('home');
```
estamos indicando a Express que tiene que hacer un render (usando el motor de plantillas handlebars, que es el que se configuró) de una vista llamada 'home'. Eso significa que toma el código de `home.handlebars`, lo inserta en la sección `{{{body}}}` del layout y retorna el resultado de esa combinación. En este caso no le pasamos ningún dato porque no necesitamos.

Más complejo es el caso de la vista 'discos'. La renderizamos con
```javascript
res.render('discos', {
    listaDiscos: discos
});
```
Lo que estamos indicando es que se inserte la vista 'discos' en el layout (main.handlebars, el layout default -y el único-, por eso no se aclara) y que se procese la plantilla con los datos que se envían como segundo parámetro.

Ese segundo parámetro siempre es **un objeto** que puede tener datos, arrays u otros objetos dentro. Este objeto es el que recibe el template, y accede a sus atributos por su nombre. Es decir, cuando pasamos el objeto
```javascript
{
    listaDiscos: discos
}
```
podemos acceder a "listaDiscos" desde el template.

En este caso, listaDiscos es un array que armamos consultando primero el archivo discos.json y luego filtrándolo (en caso de que se hayan indicado valores para filtrar), obteniendo finalmente el array solo con los elementos que cumplan las condiciones.

##### Interpolación de datos

Los datos que enviamos a la plantilla se acceden entre doble llave (`{{ ... }}`). Así, lo que hace handlebars con

```handlebars
<h1>Colección de {{listaDiscos.length}} discos</h1>
```
es reemplazar `{{listaDiscos.length}}` por el valor de `listaDiscos.length` (la cantidad de elementos del array listaDiscos). Termina quedando, por ejemplo:
```html
<h1>Colección de 5 discos</h1>
```

Handlebars también nos permite usar algunas funciones propias, por ejemplo `if`/`else` o `each`. En este caso usamos `each`, que es similar a un forEach de JS, se aplica a arrays y lo que hace es rendrizar en cada ciclo (iteración) el mismo código HTML pero con datos del elemento que corresponda en cada caso (al que puede referirse con la variable `this`) Se escribe de la siguiente forma:
```handlebars
{{#each nombre_del_array}}
    bloque de HTML para renderizar en cada iteración
{{/each}}
```
y en nuestro caso lo estamos usando para armar los datos de un disco, con el siguiente código:
```handlebars
{{#each listaDiscos}}
<div class="disco">
    <p>Artista: {{this.artista}}</p>
    <p>Título: {{this.titulo}}</p>
    <p>Año: {{this.lanzamiento}}</p>
    <img class="img-tapa" src="img/{{this.tapa}}">
</div>
{{/each}}
```

En este caso, se va a renderizar ese HTML para cada elemento del array listaDiscos, al que podemos acceder como `this`, reemplazando la referencia de cada propiedad con su valor. Por ejemplo, un elemento quedaría
```html
<div class="disco">
    <p>Artista: The Beatles</p>
    <p>Título: Abbey Road</p>
    <p>Año: 1968</p>
    <img class="img-tapa" src="img/the-beatles-abbey-road.jpg">
</div>
```
