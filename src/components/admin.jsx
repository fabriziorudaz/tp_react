import React, { useEffect, useState } from 'react'
import "../App.css"
import '../main.css'

export default function admin() {
    const [contraseña, setContraseña] = useState('');
    const [admin, setAdmin] = useState(false);

    useEffect(() => {
        let ad = JSON.parse(localStorage.getItem('admin'));
        setAdmin(ad);
    }, [])
    function seciona(e) {
        e.preventDefault();
        if (contraseña === "777") {
            const abre = true;
            setAdmin(abre);
            localStorage.setItem('admin', JSON.stringify(abre));
        }
        console.log(admin);
    }
    function secionc(e) {
        e.preventDefault();
        const cierra = false;
        setAdmin(cierra);
        localStorage.setItem('admin', JSON.stringify(cierra));

    }
    return (
        <div className="principalAdmin">
            <form onSubmit={seciona}>
                <h3 className='aviso'>ingrese su contraseña</h3>
                <input className='inputTextAdmin'type="text" placeholder="nombre" />
                <input className='inputTextAdmin'type="text" placeholder="contraseña" value={contraseña} onChange={(e) => setContraseña(e.target.value)} />
                <button className="buttoncomment">iniciar sesion</button>
            {admin && <h2>sos admin crack</h2>}
            </form>
            <button className="buttoncomment" onClick={secionc}>cerrar sesion</button>
        </div>
    );
}