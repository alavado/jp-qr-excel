import React from 'react'
import QrReader from 'react-qr-reader'
import { useHistory } from 'react-router-dom'
import beep from '../../assets/beep.wav'
import './LectorQR.css'
import { useDispatch } from 'react-redux'
import { fijarDatosNuevoRegistro } from '../../redux/actions'

const LectorQR = () => {

  const audio = new Audio(beep)
  const history = useHistory()
  const dispatch = useDispatch()

  const handleScan = data => {
    if (data) {
      audio.play()
      dispatch(fijarDatosNuevoRegistro(data))
      history.push('/preview')
    }
  }

  const handleError = err => {
    console.error(err)
  }

  return (
    <div className="contenido">
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
