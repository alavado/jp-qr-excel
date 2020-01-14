import React from 'react';
import './App.css';
import LeerQR from '../LeerQR';

const App = () => {

  return (
    <div id="contenedor">
      <div id="barra-superior">
        Registro JP
      </div>
      <div id="contenido">
        <LeerQR />
      </div>
    </div>
  );
}

export default App;
