/*XMLHttpRequest is an API that provides scripted client functionality for transferring data 
between a client and a server. 
It allows you to get data from an external URL without having to refresh the page.
 For example, a user could click a button that results in a small part of the page updating, 
 rather than the whole page.

XMLHttpRequest is used heavily in Ajax. Despite its name, 
it can be used to fetch any type of data — not just XML.

XMLHttpRequest includes a number of methods and attributes. 
In the above example, we use open() to initialize the request, and send() to send the request
*/

//Creamos la variable xhr y asignamos un nuevo request
var xhr = new XMLHttpRequest()
console.log(xhr);
console.dir(xhr);

// Open a new connection, using the GET request on the URL endpoint
xhr.open('GET', 'https://my-json-server.typicode.com/lucascn21/demo/db', true)

xhr.onload = function() {
    // Begin accessing JSON data here
    console.log(xhr.responseText)
    let datos = JSON.parse(xhr.responseText)
    console.log(datos)
    console.dir(datos)
}

// Send request
xhr.send()

console.log(xhr);
console.dir(xhr);