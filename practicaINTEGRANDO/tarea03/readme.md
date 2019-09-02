# Catálogo de discos

Acá tienen una página vacía, un css vacío y un script que solo contiene la definción de un array de objetos (en una constante "discos").

Les dejo una propuesta, con distintos niveles de dificultad. Prueben distintos abordajes, si dudan cómo encararlo. Hay elementos que pueden crearse desde el script y otros quizás pueden estar previstos en el HTML desde antes. **Pregunten si necesitan**, no quiero que me digan "no lo hice porque no sabía cómo o por dónde empezar". PRE GUN TEN. Y si pueden respóndanse entre uds., obvio :)

##### Nivel 1
Que el script recorra ese array y muestre, de la manera que uds. quieran (tabla, divs, lo que gusten), los datos de los discos y la imagen de la tapa. Todas las imágenes de tapas deben tener el mismo tamaño (sugiero 150x150 aprox).

##### Nivel 2
Que al hacer click en el año de lanzamiento, abra en otra solapa la página de Wikipedia con la información de ese año (siempre son links con la forma es.wikipedia.org/wiki/YYYY, por ejemplo https://es.wikipedia.org/wiki/1975).

##### Nivel 3
Que al hacer click en la imagen de la tapa, podamos verla en tamaño grande "por delante" de todo lo demás, como si fuera una vista en zoom.
Tip para esto: deberían tener (sea armado previamente o desde el código) algún div oculto ubicado por delante de todo (eso lo pueden garantizar con la propiedad `z-index` de css) que contenga una `<img>` y, desde el código, asignen a esa imagen la tapa correspondiente y la pongan visible, quizás con una X para cerrar o que se cierre al clickearla nuevamente, o lo que gusten. También puede ser un elemento imagen suelto, sin div, pero ponerlo en un div les da la posibilidad de poner algún texto al pie y un botón (esa X que decía) de cierre.