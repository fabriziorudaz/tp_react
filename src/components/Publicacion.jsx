import { useState, useEffect } from 'react'
import Markdown from 'react-markdown';
import '../App.css'
import '../main.css'

const Publicacion = ({ nombreUsuario, contenido, titulo, publicaciones, setPublicaciones }) => {

    const [comentario, setComentario] = useState('')
    const [comentarios, setComentarios] = useState([])

    function handleComentar(){
        localStorage.setItem('comentarios', JSON.stringify([...comentarios, comentario]))
        setComentarios([...comentarios, comentario])
        setComentario('')
    }

    useEffect(() => {
        const comentariosGuardados = JSON.parse(localStorage.getItem('comentarios')) || []
        setComentarios(comentariosGuardados)
    }, [])

    function deleteTarea(e) {
        let id = +e.target.parentElement.id; /*El + hace exactamente lo mismo que parseInt()*/
        let nuevasPublicaciones = publicaciones.filter((publicacion, indice) => {
            if (indice !== id) {
                return publicacion;
            }
            else if (indice === id) {
                localStorage.removeItem(publicacion, indice);
            }
        });
        setPublicaciones(nuevasPublicaciones);
    }

    return (
        <div className='articulo'>
            <main>
                <section>
                    <p className='artiTitulo'>{titulo}</p>
                    <p className='autor'>{nombreUsuario}</p>
                    <div className='publicacion'><Markdown>{contenido}</Markdown></div>
                </section>  
                <h4 className='avisoComent'>¡Comenta algo!</h4>
                    <textarea
                        className='textareaComment'
                        onChange={(e) => { setComentario(e.target.value) }}
                    /> <br />   
                    <input className='buttoncomment' onClick={handleComentar} type='button' value="Comentar" />  
                    <h4 className='avisoComent '>comentarios</h4>  
                    {
                        comentarios.map((comentario, idx) => (
                            <p className='publicacionComments'key={idx}>{comentario}</p>
                        ))
                    }

                <input className='buttondelete'type='button' value="Eliminar" onClick={deleteTarea} />
            </main>
        </div>
    )
}

export default Publicacion