import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [password, setPassword] = useState('');
  const [length, setLenght] = useState(8);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);

  useEffect(() => {
    generatPassword()
  }, [number, symbol, length])

  function copyText() {
    navigator.clipboard.writeText(password)
    alert('copid')
  }


  function includeNumber(e) {
    setNumber(e.target.checked);
  }
  function includeSymbol(e) {
    setSymbol(e.target.checked);
  }

  function generatPassword() {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (number) {
      str += '1234567890'
    }
    if (symbol) {
      str += '/*-+{}[]=_()&^%$#@!~`?><,.;'
    }
    for (let i = 0; i < length; i++) {
      let randomNumber = Math.floor(Math.random() * str.length);
      let char = str.charAt(randomNumber);
      pass += char;
    }
    setPassword(pass);
  }





  return (

    <>
    <div>
      <p></p>
    </div>
      <div className='flex items-center justify-evenly'>
        <h2 className=''>{password}</h2>

        <div className='flex items-center justify-center gap-[20px]'>
          <button onClick={copyText}><i className="fa-regular fa-copy text-[20px]"></i></button>
          <button onClick={generatPassword}><i className="fa-solid fa-arrows-rotate text-[20px] "></i></button>
        </div>

      </div>

      <div>
        <p>Customize your password</p>
        <hr />
      </div>

      <div className='flex items-center justify-evenly'>

        <div className='p-[10px]'>
          <p className='pb-[5px]'>Password Length</p>
          <label htmlFor="lenght" className='mr-[10px] border-[1px] border-[#808080c9] px-[20px] py-[3px]'>{length}</label>
          <input type="range" id="length" min={1} max={50} onChange={(e) => setLenght(e.target.value)} value={length} />
        </div>

        <div>

          <div>
            <label htmlFor="number" className='mr-[10px] p-[5px]'>Number</label>
            <input type="checkbox" id="number" onChange={includeNumber} />
          </div>
          <div>
            <label htmlFor="symbol" className='mr-[10px] p-[5px]'>Symbols</label>
            <input type="checkbox" id="symbol" onChange={includeSymbol} />
          </div>

        </div>


      </div>

    </>

  )
}

export default App;

