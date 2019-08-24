const listaDeSaludos = [
	{
		saludo: "Hola",
		idioma: "Saludo en español."
	},	
	{
		saludo: "Hello",
		idioma: "Saludo en inglés."
	},
	{
		saludo: "Ciao",
		idioma: "Saludo en italiano."
	},
	{
		saludo: "Salut",
		idioma: "Saludo en francés."
	},
	{
		saludo: "こんにちは",
		idioma: "Saludo en japonés (Kon'nichiwa)."
	}
]

const contenedor = document.getElementById("contenedor");

function saludosIdiomas() {	
	contenedor.innerHTML = "";
	for (let i = 0; i < listaDeSaludos.length; i++) {
		let boton = document.createElement("button");
		boton.textContent = listaDeSaludos[i].saludo;
		boton.setAttribute("class", "boton palabra");
		boton.onclick = function() {
			alert(listaDeSaludos[i].idioma);
		}
	contenedor.appendChild(boton);
	}
}