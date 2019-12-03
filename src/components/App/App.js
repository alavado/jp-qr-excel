import React, { useState } from 'react';
import './App.css';
import QrReader from 'react-qr-reader'

const App = () => {

  const [data, setData] = useState('')

  const handleScan = data => {
    if (data) {
      setData(data)
    }
  }

  const handleError = err => {
    console.error(err)
  }

  return (
    <div id="contenedor">
      <div id="barra-superior">
        JP's system
      </div>
      <div id="contenido">
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ marginTop: '10vw', width: '80vw' }}
        />
        <h1>Aquí abajo aparece lo leído</h1>
        <p>{data}</p>
      </div>
    </div>
  );
}

export default App;
