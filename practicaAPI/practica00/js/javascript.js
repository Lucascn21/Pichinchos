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

const token = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1OTkxODMyODIsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJlbGlhbmFzaWx2YS5wcm9mZXNpb25hbEBnbWFpbC5jb20ifQ.wanoXw95QI2jZOqY5Ims4vtYZTekXkVuIx0SADyC7mKTia7VlkkxdhVsESMOnfJsew5O2lg5t96flv4KA1-riw";
// Open a new connection, using the GET request on the URL endpoint
xhr.open('GET', 'https://api.estadisticasbcra.com/milestones', true)
xhr.setRequestHeader("Authorization", "BEARER " + token);

xhr.onload = function() {
    // Begin accessing JSON data here
    console.log(xhr.responseText)
    let datos = JSON.parse(xhr.responseText)
    console.log(datos)
    console.dir(datos)
    datos.forEach(element => {
        //alert(`dato1: ${element.d} dato2: ${element.e}  dato3: ${element.t}`);
		var p1 = document.createElement("p");
		var p2 = document.createElement("p");
		var p3 = document.createElement("p");
p1.textContent=`${element.d}`     
p2.textContent=`${element.e}`  
p3.textContent=`${element.t}`                  
document.body.appendChild(p1);     
document.body.appendChild(p2);  
document.body.appendChild(p3);    
    });
}

// Send request
xhr.send();