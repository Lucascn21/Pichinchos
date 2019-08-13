/*
* Declarar la variable **usuarioYPassword** y asignarle el siguiente texto: 'pepito2017,12345'
* Declarar la variable **nombreDeUsuario** y utilizar el método **substr** para obtener el nombre de usuario (pepito2017)
* Declarar la variable **password** y utilizar el método **substr** para obtener el password (12345)
* Mostrar en consola el siguiente mensaje: El usuario ${nombreDeUsuario} tiene ${password} como password
*/

usuarioYPassword='pepito2017,12345';
nombreDeUsuario=usuarioYPassword.substr(0,10);
console.log(nombreDeUsuario);
password=usuarioYPassword.substr(11,nombreDeUsuario.length);  
console.log(password);
console.log(`El usuario ${nombreDeUsuario} tiene ${password} como contraseña.`);