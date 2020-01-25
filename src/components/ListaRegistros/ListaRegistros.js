import React from 'react'
import './ListaRegistros.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils as iconoAgregarRegistro } from '@fortawesome/free-solid-svg-icons'

const ListaRegistros = () => {
  return (
    <div>
      
      <Link to="/lectorqr" className="fab">
        <FontAwesomeIcon icon={iconoAgregarRegistro} color="white" size="2x" />
        <div className="agregar-mas">+</div>
      </Link>
    </div>
  )
}

export default ListaRegistros
