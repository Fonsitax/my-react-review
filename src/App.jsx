import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <NavBar></NavBar>
        <h1 className='text-xl font-mono text'>Hello from App.jsx</h1>
        <p>Tailwind doesn't work. Help! :(</p>
      </div>
    </>
  )
}

export default App
