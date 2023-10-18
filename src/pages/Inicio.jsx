import React, { useEffect, useState } from 'react'
import '../App.css'
import '../main.css'


const Inicio = ({ setPublicaciones, publicaciones }) => {

    const [contenido, setContenido] = useState('')
    const [nombre, setNombre] = useState('')
    const [titulo, setTitulo] = useState('')


    function nombreCambio(e) {
        setNombre(e.target.value)
    }

    function tituloCambio(e) {
        setTitulo(e.target.value)
    }


    function handleClick(e) {
        e.preventDefault()

        const nuevaPublicacion = {
            nombreUsuario: nombre,
            texto: contenido,
            header: titulo
        }

        // Spread operator, me sirve para indicar que voy a darle a un array
        // como valor, lo que ya tenia mas lo nuevo que le indico
        setPublicaciones([...publicaciones, nuevaPublicacion])
        localStorage.setItem('publicaciones', JSON.stringify([...publicaciones, nuevaPublicacion]))
        setNombre('')
        setTitulo('')
        setContenido('')
    }


    return (
        <div>
            <div className='principal'>
                <h1 className='titulo'>Blog</h1>
                <div className='formulario'>
                    <input className='inputText' type="text" placeholder='Ingrese su nombre' value={nombre} onChange={nombreCambio} /><br /><br />
                    <input className='inputText' type="text" placeholder='Ingrese el titulo' value={titulo} onChange={tituloCambio} /><br /><br />
                    <label htmlFor='publicacion'><p className='aviso'>¿Que esta pasando?</p></label><br />
                    <textarea
                        value={contenido}
                        className='inputTextarea'
                        onChange={(e) => { setContenido(e.target.value) }}
                    />
                    <br />
                </div>
                <input className='submitbutton' type='button' onClick={handleClick} value="Publicar" />
            </div>

        </div>
    )
}

export default Inicio