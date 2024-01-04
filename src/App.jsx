import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

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
    Swal.fire({
      title: 'success!',
      text: 'Copy Text!',
      icon: 'success',
      confirmButtonText: 'Copy'
    })
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
      <div className='text-center text-[30px] font-bold mb-[30px]'>
        <p className='text-[#d22]'><span className='text-[black]'>Password</span> Generator <span className='text-[#d22] text-[3rem]'>...</span></p>
      </div>
      <div className='flex items-center justify-evenly'>

        <div className='flex items-center justify-start gap-[2rem] bg-[#ffffff] p-[30px] w-[70%] rounded-t-[30px] rounded-b-xl border-b-[10px]'>
          <h2 className='text-[2.5rem] w-[80%]  overflow-hidden break-before-column'>{password}</h2>
          <div className='flex items-center justify-center gap-[20px]'>
            <button onClick={copyText}><i className="fa-regular fa-copy text-[30px]"></i></button>
            <button onClick={generatPassword}><i className="fa-solid fa-arrows-rotate text-[30px] "></i></button>
          </div>
        </div>

      </div>

      <div className='flex items-center justify-center mt-[20px]'>
        <p className='bg-[white] w-[70%] text-[1.75rem] font-extrabold p-[5px] pl-[20px] rounded-t-xl'>Customize your password</p>

      </div>
      <div className='flex items-center justify-center'>
        <div className='border-b-[2px] border-[#c7c5c5ce] w-[65%]'>

        </div>
      </div>

      <div className='flex items-center justify-evenly  '>

        <div className='w-[70%] bg-[#ffffff] flex items-center justify-center gap-[20rem] p-[10px] h-[15rem] rounded-b-xl'>
          <div className='p-[10px]'>
            <p className='pb-[5px] text-[1.5rem] font-[500] '>Password Length</p>
            <label htmlFor="lenght" className='mr-[10px] border-[1px] border-[#b0b0b0c9] px-[20px] py-[3px] shadow-inner rounded-md text-[18px] font-bold'>{length}</label>
            <input type="range" id="length" min={1} max={30} onChange={(e) => setLenght(e.target.value)} value={length} />
          </div>

          <div>

            <div>
              <label htmlFor="number" className='mr-[10px] text-[20px] font-semibold  p-[5px]'>Number</label>
              <input type="checkbox" id="number" onChange={includeNumber} />
            </div>
            <div>
              <label htmlFor="symbol" className='mr-[10px] text-[20px] font-semibold p-[5px]'>Symbols</label>
              <input type="checkbox" id="symbol" onChange={includeSymbol} />
            </div>

          </div>
        </div>

      </div>

      <footer className='flex items-center justify-center fixed w-[100%]  bottom-[2px] '>
        <div class="wrapper bg-[white] w-[100%] flex items-center justify-around p-[px] font-[500] text-[1.8rem]">
          <small className='text-[#d22]'>&copy;2024 <strong className='text-[black]'><a href="https://github.com/ahsanalijs">Ahsan Ali</a>....</strong> All Rights Reserved</small>
        </div>
      </footer>

    </>

  )
}

export default App;

