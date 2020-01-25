import React from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import LectorQR from '../LectorQR'
import PrevisualizacionNuevoRegistro from '../PrevizualizacionNuevoRegistro'
import ListaRegistros from '../ListaRegistros'

const App = () => {

  return (
    <div id="contenedor">
      <Switch>
        <Route path="/" exact component={ListaRegistros} />
        <Route path="/lectorqr" component={LectorQR} />
        <Route path="/preview" component={PrevisualizacionNuevoRegistro} />
      </Switch>
    </div>
  )
}

export default App
