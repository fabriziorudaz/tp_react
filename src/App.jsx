import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Inicio from './pages/Inicio'
import './App.css'
import './main.css'
import { useState, useEffect } from 'react'
import Lista from './components/Lista'
import Admin from './components/admin'


function App() {

  const [publicaciones, setPublicaciones] = useState([])

  useEffect(() => {
    const publicacionesGuardadas = JSON.parse(localStorage.getItem('publicaciones')) || []
    setPublicaciones(publicacionesGuardadas)
  }, [])

  return (
    <Router>
      <nav id='navbar'>
        <Link className='links' to="/">Inicio</Link>
        <Link className='links' to="/publicaciones">Publicaciones</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Inicio setPublicaciones={setPublicaciones} publicaciones={publicaciones} />} />
        <Route path="/publicaciones" element={<Lista publicaciones={publicaciones} setPublicaciones={setPublicaciones} />} />
        <Route exact path="/admin" element={<Admin />} />
      </Routes>

    </Router>
  )
}

export default App
