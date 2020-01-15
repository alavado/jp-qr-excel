import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import LectorQR from '../LectorQR'
import PrevisualizacionNuevoRegistro from '../PrevizualizacionNuevoRegistro'

const App = () => {

  return (
    <div id="contenedor">
      <div id="barra-superior">
        Registro JP
      </div>
      <div id="contenido"> 
        <Route path="/lectorqr" component={LectorQR} />
        <Route path="/preview" component={PrevisualizacionNuevoRegistro} /> 
      </div>
    </div>
  )
}

export default App
