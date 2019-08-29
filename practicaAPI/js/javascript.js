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

//Creamos la variable request y asignamos un nuevo request
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://my-json-server.typicode.com/Lucascn21/demo', true)

request.onload = function() {
    // Begin accessing JSON data here
}

// Send request
request.send()