import React from 'react'
import './PrevisualizacionNuevoRegistro.css'
import { useSelector } from 'react-redux'

const PrevisualizacionNuevoRegistro = () => {

  const datosNuevoRegistro = useSelector(state => state.registros.datosNuevoRegistro)
  
  return (
    <div>
      { datosNuevoRegistro && datosNuevoRegistro.map(d => <p>{d}</p>) }
    </div>
  )
}

export default PrevisualizacionNuevoRegistro
