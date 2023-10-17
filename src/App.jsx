import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Inicio from './pages/Inicio'
import './App.css'
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
      <nav style={{ height: '50px', backgroundColor: 'black', width: '100%', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
        <Link to="/">Inicio</Link>
        <Link to="/publicaciones">Publicaciones</Link>
        <Link to="/admin"> admin</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Inicio setPublicaciones={setPublicaciones} publicaciones={publicaciones} />} />
        <Route path="/publicaciones" element={<Lista publicaciones={publicaciones} setPublicaciones={setPublicaciones} />} />
        <Route exact path="/admin" element={<Admin/>} />
      </Routes>

    </Router>
  )
}

export default App
