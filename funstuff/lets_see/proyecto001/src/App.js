import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Alert } from 'reactstrap';

//Recordar que instale https://reactstrap.github.io
class App extends Component {
  //El método render() tiene por objetivo generar la interfaz visual de la componente 'App'
  render() {
    const siglo=21;
    const persona = {
      nombre: 'Juan',
      edad: 34
    }
    return (
      <div>
      <Alert color="primary">
        This is a primary alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
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
}

export default App;
