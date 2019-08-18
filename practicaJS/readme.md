# Más de variables, objetos, funciones y arrays

Partimos de algunos conceptos que ya tenemos:
- Vimos tres tipos de variables "base": string (texto), number (número) y boolean (true/false)
- Además de esos tipos base, vimos 2 tipos más complejos: Array y Object.
- Vimos también que las funciones, a su vez, también se almacenan en variables (con el mismo nombre de la función).

Intentemos combinar todas esas cosas.

## Objeto con objetos

Un objeto puede, desde ya, contener más objetos:

```javascript
var persona = {
    nombre: "Juana",
    apellido: "Doe",
    domicilio: {
        calle: "Av. Rivadavia",
        altura: "7468",
        piso: 10,
        departamento: "B",
        codPostal: {
            numerico: 1406,
            nuevo: "C1406GMR"
        }
    },
    fecNacimiento: "1988-07-20"
}
```

Definido ese objeto, podría acceder al código postal nuevo, por ejemplo, con `persona.domicilio.codPostal.nuevo`


## Objeto con funciones

Un objeto, como ya vimos, también puede contener funciones. Un dato adicional (lo profundizaremos en clase) es que las funciones de un objeto pueden acceder a las propiedades/atributos de ese mismo objeto utilizando `this`, que se traduce literalmente como "esto" y es una referencia al propio objeto.

Ejemplo:

```javascript
var clima = {
    temperatura: 18,
    unidad: "ºC",
    humedad: 37,
    verDatos: function() {
        return `La temperatura es de ${this.temperatura}${this.unidad} y la humedad del ${this.humedad}%`
    }
}
```

Así, `clima.verDatos()` me devuelve el texto con la info del clima que está en el objeto. Si cambio los datos, cambia el texto que genera la función.

## Objeto con Arrays

Un objeto, claro, también puede contener un array:

```javascript
var infoCurso = {
    nombre: "Aplicaciones web con Node.js",
    dias: ["Martes", "Jueves"],
    horaDesde: 9,
    horaHasta: 13,
 q    listaAlumnos: [(... y acá un array con todxs uds ...)]
}
```

Entonces `infoCurso.dias[0]`, por ejemplo, retornaría "Jueves".


## Array con objetos

Los elementos que un array contiene también pueden ser objetos (incluso pueden ser funciones, también, pero ese nivel de complejidad dejémoslo de lado por ahora). Así, por ejemplo, yo podría tener un Array donde cada elemento es un objeto de persona como el definido al principio, de modo que `listaPersonas[3].nombre` podría ser el atributo nombre del objeto que está en la 4ta posición del array.


## Agregado de propiedades de los objetos

A los objetos en JS les podemos agregar propiedades después de haberlos definido, sin problema. Por ejemplo, si yo defino el objeto:

```javascript
var caja = {
    medidaX: 20,
    medidaY: 30,
    medidaZ: 25,
    color: "rojo"
}
```

y quisiera agregarle otra propiedad, puedo simplemente indicar:

```javascript
caja.material = "cartón"
```

y agrego la propiedad `material`. Hecho esto, mi objeto ahora es:

```javascript
var caja = {
    medidaX: 20,
    medidaY: 30,
    medidaZ: 25,
    color: "rojo",
    material: "cartón"
}
```

> Noten que cuando asigno valor a una propiedad (sea existente o que la esté creando) uso el operador igual (=). El ":" solo se usa para la definición de las propiedades en el momento de declarar el objeto.

La mecánica sería la misma si quiero agregarle otro objeto, un array o una función.


# EJERCICIO

Partimos de tener la misma función que genera una lista de 100 números al azar del ejercicio anterior (se las dejo declarada en el script.js). Declaro un objeto "datos" con, inicialmente, una sola propiedad "listaNumeros", a la que en el mismo momento de la definición le asigno como valor un array de números al azar (creado utilizando la función).

Lo que les pido:
- Escribir código que recorra el array que está en `datos.listaNumeros` calculando mínimo y máximo valor, y guardando cada uno de esos valores en nuevas propiedades creadas en el objeto, `datos.min` y `datos.max`.

- Escribir una función `mostrarDatos` que reciba como parámetro el objeto completo y muestre por consola un texto que indique los valores max y min.

- Si lograron eso, como 2do paso les pido llevar la lógica del primer punto (la que recorre y crea las propiedades) a una función que reciba como parámetro el objeto original y retorne el nuevo objeto con las propiedades agregadas. Piensen cómo manipularían el objeto en ese caso. Hacer esto presenta varias complicaciones acerca de cómo manejar los valores y las asignaciones, vean qué dudas surgen.