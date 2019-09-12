import React, { Component } from 'react';
import './App.css';
import { Alert } from 'reactstrap';

//Recordar que instale https://reactstrap.github.io
class App extends Component {
  //El método render() tiene por objetivo generar la interfaz visual de la componente 'App'
  constructor(props) {
    super(props)
    this.presion = this.presion.bind(this);
    this.generarAleatorio = this.generarAleatorio.bind(this);
    //Podemos definir en state todos los datos que van a variar durante la ejecución de la aplicación y queremos que se actualicen en pantalla.
    this.state = {
      numero: 'No se ha generado número aleatorio aún'
    }
  }
  render() {
    const siglo=21;
    const persona = {
      nombre: 'Juan',
      edad: 34
    }
    return (
      <div>
      <Alert color="primary">
        This is a primary alert with <a href="\logo192.png" className="alert-link">an example link</a>. Give it a click if you like.
      </Alert>
        <h1>Título nivel 1</h1>
        <h2>{this.tit="bla2"}</h2>
        <h3>{this.mostrarTitulo('bla3')}</h3>
        <hr />
        <p>Estamos en el siglo {siglo}</p>
        <h3>Acceso a un objeto</h3>
        <p>{persona.nombre} tiene {persona.edad} años</p>
        <h3>Llamada a un método</h3>
        <p>[persona]</p>
        <p>Un valor aleatorio llamando a un método.</p>
        {this.retornarAleatorio()}
        <h3>Calculo inmediato de expresiones</h3>
        3 + 3 = {3+3}
     
        <form onSubmit={this.presion}>
        <p>Ingrese primer valor:
          <input type="number" name="valor1" />
        </p>
        <p>Ingrese segundo valor:
          <input type="number" name="valor2" />
        </p>        
        <p>
          <input type="submit" value="Sumar" />
        </p>
        </form>

        <p>Número aleatorio: {this.state.numero}</p>
        <button onClick={this.generarAleatorio}>Generar número aleatorio</button>
      </div>
    );
  } 

  retornarAleatorio() {
    return Math.trunc(Math.random() * 10);
  }
  mostrarTitulo(tit) {
    return (<h1>
             {tit}
            </h1>)
  }
  presion(e) {
    e.preventDefault(); //evita la accion default de refrescar la pagina
    const v1=parseInt(e.target.valor1.value, 10);
    const v2=parseInt(e.target.valor2.value, 10);
    const suma=v1+v2;
    alert('La suma es: '+suma);
  }
  generarAleatorio() {
    const v=Math.trunc(Math.random()*10);
    this.setState( {
      numero: v,
    })
    //alert("no se por que modifica el <p> que es el retorno de una funcion que retorna un random")
    //mediante la llamada al método setState (que se hereda de la clase Component) modificamos su valor, con esto la librería React se encarga de ejecutar nuevamente el método render() pero solo actualizando los estados cambiados y sin tener que redibujar la página completa.
  }
}

export default App;
