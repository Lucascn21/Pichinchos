import React from 'react';
import './App.css';
//import Hola from './componentes/botonHola'; //Case sensitive, debe ser mayuscula
import Tweet from './componentes/botonTweet';//Case sensitive, debe ser mayuscula
import NavBar from './componentes/navBar';//Case sensitive, debe ser mayuscula
import { Container, Row, Col, Button } from 'reactstrap';
/*
<div className='app'>
<Tweet/>
<Tweet/>
<Tweet/>
<Tweet/>
<div class="col">Column</div>
<div class="col">Column</div>
<div class="w-100"></div>
<div class="col">Column</div>
<div class="col">Column</div> 
</div>
*/
function App() {

  return (
<Container id="container" fluid>
        <Row>
          <Col id="navbar"><NavBar/></Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs="3"><Button color="primary" size="lg">Clientes</Button></Col>
          <Col xs="3"><Button color="primary" size="lg">Operadores</Button></Col>
          <Col xs="3"><Button color="primary" size="lg">Visitante</Button></Col>
          </Row>
          <Row className="justify-content-md-center">
          <Col xs="3"><Tweet/></Col>
          <Col xs="3"><Tweet/></Col>
          <Col xs="3"><Tweet/></Col>
          </Row>
      </Container>
);
}


export default App;
