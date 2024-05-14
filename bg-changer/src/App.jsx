import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

  return (
      <div className='w-screen h-screen duration-200'
        style={{backgroundColor: color}} 
      >
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 gap-3'>
          <div className='flex justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
            <button className='outline-none rounded-lg py-1'
              style={{backgroundColor:'red'}} onClick={() => setColor('red')}>Red</button>
          </div>
          <div className='flex justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
            <button className='outline-none rounded-lg py-1'
              style={{backgroundColor:'blue'}} onClick={() => setColor('blue')}>blue</button>
          </div>
          <div className='flex justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
            <button className='outline-none rounded-lg py-1'
              style={{backgroundColor:'green'}} onClick={() => setColor('green')}>green</button>
          </div>
          <div className='flex justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
            <button className='outline-none rounded-lg py-1'
              style={{backgroundColor:'black'}} onClick={() => setColor('black')}>black</button>
          </div>
        </div>
      </div>
  )
}

export default App
