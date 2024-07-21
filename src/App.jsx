import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <NavBar></NavBar>
       <p>.</p>
      </div>
    </>
  )
}

export default App
