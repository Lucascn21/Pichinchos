/*
Location
Existe un objeto llamado location que representa la URL del documento
Dado que es un objeto bastante común podemos accederlo utilizado sólo su nombre
Ejemplo:
*/
// Como propiedad del objeto window
window.location

// Como objeto
location

/*
Por medio de sus propiedades podemos acceder a las distintas partes de la URL
href: muestra la URL como string
protocol: muestra el protocolo. ej: http, https
host: retorna un string con el nombre del host y el número de puerto en caso de que tenga uno
hostname: muestra sólo el nombre del host
port: el puerto del documento
pathname: muestra el path del recurso
search: muestra los parámetros del query string (las variables que pasamos por GET)
hash: muestra el contenido de hash (lo que tenga numeral #)
*/
location.href;
location.protocol;
location.host;
location.hostname;
location.port;
location.pathname;
location.search;
location.hash;

/*
Este objeto también nos permite navegar a otro documento estableciendo un valor a la propiedad href
Otra opción es directamente asignar una url como string al objeto location
*/