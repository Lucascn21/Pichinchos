    # JS en el browser (continuación)

Seguimos adelante y en este caso armamos una página que tiene un solo botón que, al clickearlo, lee los datos de un array de objetos con definiciones de palabras y crea un botón para cada palabra, mostrando la palabra como texto del botón y una ventana emergente con la definición al hacer click. Escribo acá algunas ideas y definciones generales.

## Vinculación de archivo con script externo

Una cosa que agregué (distinto a cómo lo vimos en clase) es que el script no lo puse dentro de un tag `<script> ... </script>` sino que lo vinculé desde otro archivo. Para eso usamos el mismo tag `<script>` pero le agregamos un atributo `src` indicando la ruta donde está el archivo .js. Análogamente a los casos que vimos con elementos `img` o `link` de css, la ruta que pongamos en `src` será relativa a la ubicación del html desde el que estamos haciendo la referencia. En este caso, como está en la misma carpeta, simplemente pongo el nombre del archivo:

```javascript
<script src='script.js'></script>
```

Podemos especificar el tipo de script, que es javascript, pero no es necesario porque es el default. Si lo quisiéramos hacer, sería:

```javascript
<script src='script.js' type='text/javascript'></script>
```

Esto, como decía, no lo vimos en la clase. Lo vamos a empezar a usar así, en general, y ya se los mando así en este ejemplo porque no requiere demasiada explicación, pero consulten por favor si algo no se entiende al respecto.

## La lógica de este ejemplo

Partimos de definir un botón y un elemento `<div>` con id "contenedor" ya pensando en lo que vamos a hacer: cuando se haga click en el botón, agregar otros botones dentro de ese div "contenedor". Podría hacer que ese div se cree cuando hago click en el botón, en lugar de dejarlo creado en el HTML, pero en general todo el contenido "estático" (digamos, que no estoy generando dinámicamente) prefiero ya dejarlo hecho, me facilita el script. Lo demás (los botones que creo tomando los datos de la lista de definciones) lo agrego via script.

## El script

Podríamos dividir el script en dos partes:

#### Declaraciones globales

El código "global", el que está en el **scope** principal del script (es decir, que no está dentro de ninguna función), se va a ejecutar al cargar ese script (por eso el tag `<script>` tiene que estar en el body después de la creación del div "contenedor", porque si no, no existiría cuando quiero buscarlo con el `getElementById("contenedor")`). En ese código "global" tenemos dos declaraciones:

```javascript
const listaDefiniciones = [ ... ]
```
> Es la declaración de un array con datos de palabras y definiciones. Como siempre, cuando creamos una variable cuyo contenido no vamos a modificar (como en este caso, ya que solo la vamos a recorrer para leer sus datos), siempre está bueno declararla como constante (`const`).

```javascript
const contenedor = document.getElementById("contenedor");
```
> Es la declaración de una constante que va a guardar una referencia al elemento con id "contenedor". Lo hacemos así porque después vamos a usar esa referencia varias veces, así hacemos la "búsqueda" en el DOM (es decir, el getElementById) una sola vez.

Esas dos declaraciones son lo único que se va a ejecutar cuando carga la página y el script.

#### Declaración de función crearBotonesDefiniciones

Esta función es la que se va a ejecutar al hacer click en nuestro botón inicial, porque así lo indicamos en el html:

```html
<button onclick="crearBotonesDefiniciones()">Crear botones...</button>
```

Lo que hace esta función es, antes que nada, vaciar el div "contenedor" (si no lo hago, cada click en el botón me agrega los botones repetidos). Lo siguiente es recorrer con un for el array listaDefiniciones que declaramos globalmente y, para cada elemento (es decir, para cada iteración del for) crear un nuevo botón y ubicarlo dentro del div "contenedor". La creación de cada botón implica:

- Crear un elemento `<button>`, usando la función `document.createElement`. Esa función nos devuelve una "referencia" al botón creado y la guardamos en una variable "boton".
- Usando esa variable, le asignamos un valor a la propiedad `textContent` del botón, que será el texto que se ve sobre el mismo. En este caso, le ponemos como texto el valor de la propiedad "palabra" del objeto de la lista que estamos procesando en el recorrido.
- Del mismo modo, asignamos una función como valor de la propiedad `onclick` del botón. Esa función es la que va a ser ejecutada cada vez que hagamos click en ese botón en cuestión. Nuestra función va a disparar un `alert` con el contenido de la propiedad "definicion" del objeto de la lista.
- Finalmente agregamos el objeto creado en el documento, en este caso dentro del div "contenedor".


## Ejercicio

Les propongo lo siguiente:

- Dificultad 1: Agregar un archivo .css para estilar el botón inicial y la lista de botones que se crean. Para esto:
    - Agregar al botón principal una clase "boton" y una clase "principal" (`class="boton principal"`). Definir en el CSS que la clase "boton" haga que el elemento tenga fondo azul oscuro, letra blanca y ningún borde, que el `:hover` le cambie el color de fondo a azul más claro y que el `:active` ponga el fondo gris y la letra azul. La clase "principal" simplemente tiene que hacer que el `font-size` sea más grande que el inicial.
    - Definir un estilo para el id "contenedor" que haga que los botones que se le crean dentro estén uno debajo del otro. Una forma de hacerlo es definirle `display: flex;`, `flex-direction: column;` y `align-items: flex-start;`. Investiguen otras formas.

- Dificultad 2: utilizando la función `setAttribute()` (que explico a continuación), hagan que cada botón creado tenga las clases "boton" y "palabra". Agreguen un estilado para la clase "palabra" que setee un margen de 5px. El resultado debería ser que los botones creados tengan el mismo estilo del botón principal (solo que con la letra más chica) y un margen separador entre sí.


#### Función setAttribute

Sirve para crear o modificar desde JS un atributo de un elemento HTML. Se usa de la siguiente manera:

```javascript
elemento.setAttribute("atributo", "valor");
```

El atributo es un string con el nombre del atributo que quiero asignar ("class", "id", etc.). El valor es otro string con, claro, el valor. El resultado es que agregue `atributo="valor"` en el html.