import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import StateBasics from './components/StateBasics'
import IncreDecre from './components/IncreDecre'
import Namingbutton from './components/Namingbutton'
import Api from './components/Api'
import Pokimon from './components/Pokimon'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/l" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/state" element={<StateBasics />} />
        <Route path="/ID" element={< IncreDecre />} />
        <Route path='/n' element={< Namingbutton />} />
        <Route path='/a' element={<Api />} />
        <Route path='/b' element={<Pokimon/>}/>
      </Routes>
      
      
      
      
    </>
  )
}

export default App
