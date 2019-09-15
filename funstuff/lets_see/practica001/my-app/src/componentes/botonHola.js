import React from 'react';

function botonHola(){
    const decirHola = () =>{
        alert("hola");
      };
    return(
        <div>
        <h1>Bla</h1>
        <button onClick={decirHola}>Clickeame</button>
        </div>
    );
}

export default botonHola;