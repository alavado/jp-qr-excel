import React from 'react'
import QrReader from 'react-qr-reader'
import { useHistory } from 'react-router-dom'
import beep from '../../assets/beep.wav'
import './LectorQR.css'

const LectorQR = () => {

  const audio = new Audio(beep)
  const history = useHistory()

  const handleScan = data => {
    if (data) {
      audio.play()
      history.push('/preview')
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
    </div>
  )
}

export default LectorQR
