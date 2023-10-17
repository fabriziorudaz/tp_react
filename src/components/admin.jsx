import React, { useEffect, useState } from 'react'
import "../App.css"

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
        <div className="administrador">
            <form onSubmit={seciona}>
                <h3>ingrese su contraseña</h3>
                <input type="text" placeholder="nombre" />
                <input type="text" placeholder="contraseña" value={contraseña} onChange={(e) => setContraseña(e.target.value)} />
                <button className="secioni">iniciar sesion</button>
            </form>
            <button className="NewPost" onClick={secionc}>cerrar sesion</button>
        </div>
    );
}