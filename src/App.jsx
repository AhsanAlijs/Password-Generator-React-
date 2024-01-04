import React from 'react'
import { useState } from 'react';

function App () {
  const [password , setPassword]=useState('abc');
  const [panght , setLanght]=useState(8);
  const [number , setNumber]=useState(false);
  const [symbol , setSymbol]=useState(false);
  return (
  
    <>
    <div>
    <h2>{password}</h2>
    </div>

    <div>
      <p>Customize your password</p>
    </div>
    <hr />
    </>

  )
}

export default App;

