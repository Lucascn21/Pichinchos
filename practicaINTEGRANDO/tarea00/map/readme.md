# Funciones como parámetro: callbacks

Un "callback" es una función que se envía a otra función para ser ejecutada cuando suceda algo. Imaginemos por ejemplo una función fnA que recibe un solo parámetro, que es una función. Al parámetro (y, por lo tanto, la variable donde almacena lo que reciba en ese parámetro) lo llamaremos fnCallback. Y diremos que en algún punto de la función fnA, se ejecuta esa función que llega como parámetro:

```javascript
function fnA(fnCallback) {
    ...
    fnCallback();
    ...
}
```

Ahora imaginemos que tenemos una función fnB que ejecuta alguna tarea, cualquiera, y no recibe parámetros:

```javascript
function fnB() {
    ...
}
```

La idea del callback es sencillamente pasar una función a la otra para que esta última la ejecute en algún momento. Es decir, ejecutar:

```javascript
fnA(fnB);
```

Entonces, en la línea de fnA que dice
```javascript
    fnCallback();
```
lo que está haciendo es ejecutar fnB, que es lo que recibió como parámetro. Como si hiciera:
```javascript
    fnB();
```

Entonces lo que estamos haciendo es pasarle a fnA la función fnB para que fnA la pueda llamar (invocar, ejecutar).

El concepto de callback es muy importante en Javascript porque es uno de los pilares del concepto de **asincronía**. Veremos más al respecto en clase.