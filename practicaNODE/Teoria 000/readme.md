# Nuestro primer servidor en Node.js

### Conceptos generales

Lo que estamos haciendo es escribir el código para levantar un servidor en el entorno de Node.js utilizando la librería Express, que facilita bastante todo. La idea es que creemos una instancia del servidor Express y lo pongamos a escuchar en algún puerto http cualquiera (siempre usamos algún valor > 1000 porque los números bajos suelen tener otros usos, típicamente vemos que se usan puertos como 3000, 5000, 9000 o cosas así). Además de eso, vamos a definir "rutas" con sus distintas respuestas. Detallo todo más abajo.


### Iniciar el proyecto con npm

Como siempre que nuestro proyecto de Node tenga alguna dependencia (e incluso si no la tiene es habitual hacerlo) vamos a utilizar *npm* como "manejador de paquetes", para que administre las versiones de esas librerías y las actualice si hace falta.

Lo primero es iniciar el proyecto. En la carpeta que vamos a considerar "raíz" hacemos:

```bash
npm init
```

Eso va a iniciar un ciclo de preguntas en la consola donde npm nos va a ir pidiendo información. Para cada pregunta va a haber una respuesta entre paréntesis, que es la predefinida. Si damos enter, aceptamos esa respuesta. Si no, escribimos la que corresponda.

Con esta información, npm va a crear un nuevo archivo `package.json` (y dependiendo de la versión otro archivo `package-lock.json`, pero no le den importancia), que va a contener toda la información necesaria. Inicialmente diría que solo especifiquen `name` y `description`, lo demás que sea default.

La mayoría de los datos en ese `package.json` inicial son descriptivos. Los destacables en esta instancia son:

`name`: indica el nombre del proyecto
`description`: un texto con la descripción
`script`: un objeto con varias propiedades, cada una de las cuales describe un "script" asignado a un nombre. Esto permite ejecutar esos scripts escribiendo `npm run nombreScript`. Así, en este caso tenemos el script `start` (nombre default) que ejecuta `node server.js`. Entonces, para iniciar el proyecto podemos escribir `node server.js` o `npm run start` indistintamente. Esto es particularmente útil para que otras personas que bajen el proyecto sepan cómo se inicia.

Con esto, ya tenemos el `package.json` creado, vamos al paso siguiente.

### Instalar la librería de Express

El siguiente paso es instalar la librería de Express que vamos a usar. Para esto simplemente ejecutamos:

```bash
npm install express
```

En la consola vamos a ver un progreso de instalación y finalmente va a terminar informando el resultado. Si se instaló correctamente, veremos dos cambios:

1. El archivo `package.json` ahora contiene una "sección" (técnicamente, una nueva propiedad en ese JSON, que es un objeto) llamada "dependencies", que es donde se guardan los nombres y versiones de las librerías vinculadas al proyecto. Habiendo instalado Express veremos que ahí aparece una referencia `"express": "^4.17.1"`, o la que sea la última versión disponible. Esa información después sirve para actualizar la instalación de la librería o para que otra persona que se baja el proyecto pueda instalarse todas las dependencias sin necesidad de saber cuáles son (al ejecutar `npm install` o  `npm update`, todo lo indicado en `dependencies` se instala en la carpeta del proyecto).

2. Se crea una carpeta `node_modules` que contiene a su vez un montón de otras carpetas, una para cada librería que se instala. Express instala unas 50 librerías, que incluyen la propia librería "express", sus 30 dependencias y otras dependencias de dependencias. Todo eso lo hace automáticamente y mantiene actualizadas consistentemente todas las versiones.

Ya tenemos instalada la librería Express y sus dependencias, así que pasamos a iniciar el desarrollo.

### Iniciar el servidor Express

Creamos el archivo `server.js` donde vamos a escribir el código de nuestro server. Lo primero que hacemos es cargar la librería de Express y guardar la referencia:

```javascript
const express = require('express');
```

La constante "express" guarda, entonces, lo que sea que retorne la librería (que puede ser algo distinto en cada caso, lo veremos más en detalle cuando creemos módulos propios). En este caso es un objeto con un montón de funciones (al modo de otras librerías como `fs`). Una de esas funciones es la función por default, que es la que crea el servidor propiamente dicho, y se ejecuta si invocamos a "express()", y retorna una referencia al servidor creado.

```javascript
const app = express();
```

A partir de ese punto, tenemos en `app` un objeto de referencia a nuestro servidor con todas sus funciones.

En este punto, podemos saltar varias líneas más adelante (server.js:18) para ver el código que pone a "escuchar" el servidor, que sería la inicialización del servidor en sí. Dice:

```javascript
app.listen(3000, () => {
    console.log("Server corriendo en puerto 3000...");
});
```

La función `listen` es la que inicia la escucha, recibe como primer parámetro un número que indica el puerto en el que estará escuchando el servidor y un segundo parámetro (opcional) que es una función (una función como parámetro: un callback) que se ejecutará una vez que el servidor esté levantado y escuchando efectivamente. Nos sirve para saber que ya está iniciado.


Hecho esto, ya tenemos un servidor corriendo. Pero, claro, no sirve para nada hasta que no definamos acciones relacionadas.


### Definir las rutas


Lo que sigue a continuación (aunque no en orden del código, saltamos a la línea 6) es la definición de los "endpoints" o puntos de acceso de nuestro servidor. Estos puntos de acceso se definen según el método (GET, POST, etc) y la ruta ("/....") de la url a la que se quiere escuchar. En este caso definimos 3:

1. GET "/": cuando llegue un request GET a "/" (es decir, cuando se tipee `localhost:3000` o `http://localhost:3000/`, es indistinto) vamos a indicar a Express que retorne el archivo `index.html` que está en la ruta "/client".

2. GET "/autores": un request GET a esa ruta (`localhost:3000/autores`) va a retornar un JSON con los datos del objeto `listaAutores` que definimos en la línea 24.

3. GET "/publicaciones", que funciona igual que el anterior, pero que devuelve el JSON con el objeto `listaPublicaciones` de la línea 52.

Estos ruteos se hacen con la función `get` del objeto `app` (el servidor Express). Esa función recibe como único parámetro un callback al que le pasa dos parámetros, que habitualmente denominamos "req" y "res":

- "req" es el objeto del REQUEST, que es la consulta que llega. Más adelante veremos algunas de las cosas que contiene.

- "res" es el objeto de la respuesta (RESPONSE). Nos facilita funciones y propiedades para definir qué queremos enviar de respuesta al cliente.

Para los GET 2 y 3 usamos la función `JSON.stringify`, que convierte un objeto en un JSON, porque es el tipo de dato que enviaremos y recibiremos habitualmente (podría ser XML o texto plano también).

La respuesta la escribimos con funciones del objeto de respuesta:

`res.send` va a enviar una respuesta que contiene lo que le pasemos como parámetro. En estos casos, un JSON.

`res.sendFile` va a enviar como respuesta un archivo. En este caso, nuestro index.html.


### Definir acceso a recursos estáticos

Lo último que nos falta es definir la ruta de acceso a los "recursos estáticos". Eso significa indicarle a nuestro servidor Express dónde están ubicados los archivos estáticos (css, js, imágenes, etc.) que pueden ser requeridos por el navegador al cargar una página. En nuestro caso, cuando el cliente reciba index.html, al leer (al interpretar -parsear-) ese html, se va a encontrar primero con un link a un archivo css y después con una referencia a un archivo .js. En ambos casos lo que va a hacer es solicitárselos al servidor de donde recibió la página, y ese servidor tiene que saber dónde buscar esos archivos.
Para eso utilizamos la función use y una función "static" de la librería Express (línea 4):

```javascript
app.use(express.static(__dirname + '/client'));
```

Lo que hace la función "use" es definir un "middleware": no vamos a profundizar mucho sobre esto, simplemente diré que un middleware es una rutina que se indica para que sea ejecutada ante cualquier pedido (request) que llegue al servidor, es una función que hace de "intermediario" entre el pedido que llega y los manejadores de rutas (los endpoints que vimos antes). En este caso, este middleware es el que se fija si lo que llegó es un pedido de un objeto estático, y en ese caso configura a nuestro servidor para que lo busque con su ruta relativa a partir de la ruta `__dirname + '/client'`

`__dirname` es una variable que el entorno de Node.js le pasa a cada uno de los módulos (.js) que escribimos, y nos deja ahí la ruta completa de nuestra carpeta raíz (sin la barra final). Por ejemplo, __dirname puede ser `c:\Mis Proyectos\Servidor` o algo así.


### Iniciar el servidor

Con todo este código, tenemos lo necesario para poner a correr el server. Iniciamos ejecutando

```bash
node server.js
```

o

```bash
npm run start
```

que ejecuta lo mismo.

Veremos el mensaje "Server corriendo en puerto 3000..." en nuestra consola y ya sabremos que el server está corriendo.

Ahora podemos abrir un navegador, poner en la barra de direcciones "localhost:3000" y deberíamos ver nuestro index.html.


### Diferencia entre las rutas

Tengan siempre presente que a las rutas de un servidor las podemos acceder, básicamente, de dos formas:

- Que las consulte el navegador (eso sucede cuando tipeamos nosotrxs una url en la barra de direcciones, cuando clickeamos en un link como un `<a>` o cuando instruimos al navegador para que redireccione -lo veremos más adelante-).

- Que las consulte nuestro código .js en el navegador vía AJAX.

Lo importante de tener clara esta diferencia es que nos ayude a definir cómo armamos nuestra app. Las rutas que devuelvan información (lo que típicamente llamamos APIs, que devuelven en nuestro caso datos JSON) son para utilizar vía AJAX, porque es información que queremos pedir en algún momento desde nuestro código y procesar la respuesta. Si es el navegador el que la pide, entonces lo que se va a ver en la ventana de ese navegador va a ser el JSON, y eso no sirve para mucho (prueben poniendo en su navegador https://my-json-server.typicode.com/rsegretin/json-data-pubs/autores, por ejemplo, que le pega a la API que usamos hace un par de ejercicios, que retorna un JSON).

Entonces, lo que sí nos interesa que acceda el navegador, es a las rutas que retornan HTML (por ejemplo, nuestra ruta raíz de "localhost:3000"). El navegador recibe ese HTML y lo interpreta correctamente, mostrando la página que pretendemos mostrar.