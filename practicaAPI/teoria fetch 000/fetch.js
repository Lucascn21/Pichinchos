//fetch('http://example.com/movies.json')
fetch('http://example.com/movies.json').then(function(response) {
        if (response.ok) {
            response.json().then(function(miJson) {
                let json = URL.createObjectURL(miJson);
            });
        } else {
            console.log('Respuesta de red OK.');
        }
    })
    .catch(function(error) {
        console.log('Hubo un problema con la petición Fetch:' + error.message);
    });

// Basic blueprint
fecth(url)
    .then(response.json) // Define response type (JSON, Headers, Status codes)
    .then(data) // get the response type 

// Practical example
fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => console.log(JSON.stringify(data)))


fetch('https://jsonplaceholder.typicode.com/users', {
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'POST',
        body: JSON.stringify({
            username: 'Elon Musk',
            email: 'elonmusk@gmail.com',
        })
    })
    /*
    Uploading JSON data
    Use fetch() to POST JSON - encoded data.
    */
    // ejemplo POST
var url = 'https://example.com/profile';
var data = { username: 'example' };

fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));