import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [symbolAllowed, setSymbolAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if(numberAllowed) str += "0123456789";
      if(symbolAllowed) str += "!@#$%^&*()_+{}[]";
      for(let i = 1; i <= length; i++) {
        pass += str.charAt(Math.floor(Math.random() * str.length + 1));
      }
      setPassword(pass);
    }, [length, numberAllowed, symbolAllowed, setPassword]
  );

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 101);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, symbolAllowed, passwordGenerator]);

  return (
    <>
      <div className='w-screen max-w-md mx-auto shadow-md rounded-lg py-1 px-4 my-8 text-orange-500 bg-gray-600 mt-4'>
        <h1 className='text-3xl text-center text-white mt-2 py-2 mb-4'>Password Generator</h1>
        <div className='flex rounded-lg overflow-hidden mb-4 py-1'>
          <input
            type='text'
            className='outline-none w-full py-1 px-3 rounded-l-md'
            value={password}
            placeholder='password'
            readOnly={true}
            ref={passwordRef}
          />
          <button className='ouline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          onClick={copyPassword}>copy</button>
        </div>
        <div className='flex text-sm gap-x-2 flex-col mb-1'>
          <div className='flex items-center gap-x-1'>
            <input 
            type='range' min={8} max={100} value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)} />
            <label>Length: {length}</label>
            <input 
            type='checkbox'
            defaultChecked={symbolAllowed}
            id='symbolInput'
            onChange={() => setSymbolAllowed((prev) => !prev)}/>
            <label htmlFor='symbolInput'>Symbols</label>
            <input 
            type='checkbox'
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={() => setNumberAllowed((prev) => !prev)}/>
            <label htmlFor='numberInput'>Numbers</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
