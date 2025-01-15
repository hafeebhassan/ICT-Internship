import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import State from './components/State'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Navbar />
      
      
      <Routes>
        <Route path='/log' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/state' element={<State/>}/>
        
      </Routes>
        
      
    </>
  )
}

export default App
