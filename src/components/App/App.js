import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import NuevoRegistro from '../NuevoRegistro/NuevoRegistro';
import LeerQR from '../LeerQR';

const App = () => {

  return (
    <div id="contenedor">
      <div id="barra-superior">
        JP's system
      </div>
      <div id="contenido">
        <Switch>
          <Route exact path="/" component={NuevoRegistro} />
          <Route exact path="/qr" component={LeerQR} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
