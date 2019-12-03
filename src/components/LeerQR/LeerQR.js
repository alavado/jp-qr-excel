import React, { useState } from 'react'
import QrReader from 'react-qr-reader'
import { Link } from 'react-router-dom'
import beep from '../../assets/beep.wav'
import './LeerQR'

const LeerQR = () => {

  const [data, setData] = useState('')
  const audio = new Audio(beep)

  const handleScan = data => {
    if (data) {
      setData(data)
      audio.play()
    }
  }

  const handleError = err => {
    console.error(err)
  }

  return (
    <div>
      <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ marginTop: '10vw', width: '80vw' }}
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
