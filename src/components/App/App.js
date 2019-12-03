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
    <div className="App">
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '80vh' }}
      />
      <p>{data}</p>
    </div>
  );
}

export default App;
