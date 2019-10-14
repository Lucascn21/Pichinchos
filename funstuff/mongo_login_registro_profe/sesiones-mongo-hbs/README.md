# Ejemplo de Sesiones - Handlebars - Mongo

Ejemplo de app con servidor Express, manejo de sesiones con express-session, vistas con Handlebars y datos con mongoDB.

### Estructura de datos

El ejemplo no requiere datos iniciales, pero sí la existencia de una base de datos (en el server.js configurada con el nombre 'testdb') con una colección (que en este ejemplo se llama 'users'). Estos valores están puestos en variables, en la constante (objeto) "db" declarada en server.js (db.nombre, db.nombreColeccionUsuarios), así como la url de conexión al servidor de base de datos (db.url).

### El ejemplo

Ejemplo simple de login/registro/logout, registrando usuarixs en la DB.