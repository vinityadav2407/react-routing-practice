import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Routers from './utils/Routers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{margin:0,padding:0}}>
         <Nav/>
         <Routers/>
               
    </div>
  )
}

export default App
