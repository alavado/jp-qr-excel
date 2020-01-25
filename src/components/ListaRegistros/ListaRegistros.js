import React from 'react'
import './ListaRegistros.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils as iconoAgregarRegistro } from '@fortawesome/free-solid-svg-icons'

const ListaRegistros = () => {

  const registros = [
    {
      fecha: '2020-01-24',
      trabajador: {
        nombre: 'Juan Pérez'
      },
      comida: 'almuerzo',
      valor: 1000
    },
    {
      fecha: '2020-01-24',
      trabajador: {
        nombre: 'Juana Pérez'
      },
      comida: 'almuerzo',
      valor: 2000
    },
    {
      fecha: '2020-01-24',
      trabajador: {
        nombre: 'Juanin Pérez'
      },
      comida: 'almuerzo',
      valor: 3000
    }
  ]

  return (
    <div className="contenido">
      <table className="tabla-registros">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Trabajador</th>
            <th>Comida</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {registros.map((r, i) => <tr key={i}><td>{r.fecha}</td><td>{r.trabajador.nombre}</td><td>{r.comida}</td><td>${r.valor}</td></tr>)}
        </tbody>
      </table>
      <Link to="/lectorqr" className="fab">
        <FontAwesomeIcon icon={iconoAgregarRegistro} color="white" size="2x" />
        <div className="agregar-mas">+</div>
      </Link>
    </div>
  )
}

export default ListaRegistros
