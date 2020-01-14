import React, { useState } from 'react'
import QrReader from 'react-qr-reader'
import { Link } from 'react-router-dom'
import beep from '../../assets/beep.wav'
import './LeerQR.css'

const LeerQR = () => {

  const [data, setData] = useState('')

  const handleScan = data => {
    if (data) {
      setData(data)
      var audio = new Audio(beep)
      audio.play()
    }
  }

  const handleError = err => {
    console.error(err)
  }

  return (
    <div className="contenedor">
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        className="qr-reader"
      />
      <h1>Aquí abajo aparece lo leído</h1>
      <p>{data}</p>
      <div className="formulario">
        <Link to="/"><button>Agregar registro</button></Link>
        <Link to="/"><button>Cancelar</button></Link>
      </div>
    </div>
  )
}

export default LeerQR
