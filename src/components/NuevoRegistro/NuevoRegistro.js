import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import query from '../../queries/comidas'
import { Link } from 'react-router-dom'
import './NuevoRegistro.css'

const NuevoRegistro = () => {

  const { loading, error, data } = useQuery(query)

  return (
    <div className="formulario">
      <h1>Nuevo registro</h1>
      <select>
        {!loading && data.comidas.map(({ id, nombre }) => <option key={id}>{nombre}</option>)}
      </select>
      <Link to="/qr"><button>Aceptar</button></Link>
    </div>
  )
}

export default NuevoRegistro
