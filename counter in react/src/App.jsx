import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increaseCounter = () => {
    setCount(count + 1);
  }
  const decreaseCounter = () => {
    if(count - 1 >= 0)
      setCount(count - 1);
  }

  return (
    <>
      <button onClick={increaseCounter}>Counter is {count}</button>
      <br/>
      <button onClick={decreaseCounter}>Counter is {count}</button>
    </>
  )
}

export default App
