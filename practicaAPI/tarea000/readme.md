# Ejercicio

Sobre la base de autores / publicaciones que habíamos creado, vamos a agregar el uso de AJAX.

Les pido, entonces, que implementen las dos funciones de consulta (que antes habíamos resuelto retornando arrays escritos en el código) con código que haga las consultas AJAX (usando la librería XMLHttpRequest) a APIs creadas por mí:

https://my-json-server.typicode.com/rsegretin/json-data-pubs/publicaciones
https://my-json-server.typicode.com/rsegretin/json-data-pubs/autores

Pueden pegar esas urls en el navegador y van a poder ver qué información retornan (son los mismos datos que teníamos en el código).

Lo más importante es que ahora esas consultas que eran sincrónicas pasan a ser asincrónicas. Revisen el código que mandé, porque ahí ya cambié yo los llamados para implementar la asincronía con callbacks (después agregaremos una parte más al ejercicio para que esa parte también la hagan uds.)

#### Agregado: función Array.filter

Para implementar la consulta de la función `consultarListaPostsAutor` les indiqué que filtren los resultados de la API (que trae TODAS las publicaciones -más adelante veremos cómo traer directamente lo que necesitamos-). Para eso van a usar la función `filter`, que está definida en el prototipo `Array`. La función se utiliza con un callback, igual que `map` o `forEach`, por ejemplo, pero en este caso el callback será una función que se aplicará a cada elemento del array, y tiene que retornar `true` o `false` para indicar si el elemento cumple o no la condición para ser considerado en el filtro.

Por ejemplo, supongamos que tengo este array:

```javascript
let datos = [
    {
        nombre: "Juana",
        edad: 1
    },
    {
        nombre: "Jorge",
        edad: 47
    },  
    {
        nombre: "Adriana",
        edad: 63
    },
    {
        nombre: "Juan",
        edad: 16
    }
]
```

Podría aplicar este filtro:

```javascript
let arrayFiltrado = datos.filter(function(item) {
    if (item.edad > 18) {
        return true;
    } else {
        return false;
    }
});
```

Y eso me retornaría solamente los elementos cuyo valor de la propiedad `edad` sea mayor a 18. El nombre `item` es arbitrario, claro, es el nombre que le querramos poner a ese parámetro (en este caso podría llamarse "persona", por ejemplo, que refleja mejor su contenido).

Podemos simplificar esa función haciendo que directamente lo que se retorna sea el resultado de la comparación (y de paso cambio el nombre del parámetro):

```javascript
let arrayFiltrado = datos.filter(function(persona) {
    return (persona.edad > 18)
});
```

Así, si `persona.edad > 18` es verdadero, retornará `true` (y, desde ya, `false` en caso contrario). También podríamos escribir la función como arrow function:

```javascript
let arrayFiltrado = datos.filter((persona) => {
    return (persona.edad > 18)
});
```

Como ya vimos, si el parámetro es uno solo no hacen falta los paréntesis. Y, ya que estamos, podemos poner todo en una línea:

```javascript
let arrayFiltrado = datos.filter(persona => { return (persona.edad > 18) });
```

Pero esto puede simplificarse aún más. Cuando usamos arrow functions, si nuestra función tiene una sola línea de código, entonces podemos no poner "return", porque implícitamente (o automáticamente) la función retorna lo que retorne esa línea de código. Y, por otra parte, si es una sola línea de código tampoco son necesarias las llaves que envuelven a la función.

Así, la implementación de este filtro se puede escribir de una forma muy sencilla:

```javascript
let arrayFiltrado = datos.filter(persona => persona.edad > 18);
```

Ahora les toca a uds. implementar esta función pero para filtrar las publicaciones cuyo valor de la propiedad `idAutor` sea el que corresponde (el que reciben por parámetro).