import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import query from '../../queries/fetchComidas'
import { Link } from 'react-router-dom'
import './NuevoRegistro.css'

const NuevoRegistro = () => {

  const { loading, error, data } = useQuery(query)

  console.log(data)

  return (
    <div className="formulario">
      <h1>Nuevo registro</h1>
      <select>
        <option>Desayuno</option>
        <option>Almuerzo</option>
        <option>Cena</option>
        <option>Colación fría</option>
        <option>Colación noche</option>
      </select>
      <Link to="/qr"><button>Aceptar</button></Link>
    </div>
  )
}

export default NuevoRegistro
