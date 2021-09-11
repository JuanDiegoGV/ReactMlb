import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/Jugadores.scss'

const Jugadores = () => {

    const [enlace, setEnlace] = useState("")

    const busqueda = (e)=>{
        const nombre = document.getElementById("nombre").value;
        setEnlace(nombre)
    }

    return ( 
        <div className="Jugcontenedor">
            <h2>aqui puedes buscar jugadores de la mlb</h2>
            <p>solo escribe el apellido o el nombre del jugador</p>
            <form>
                <label htmlFor="nombre">nombre: </label>
                <input  onChange={busqueda} type="text" name="nombre" id="nombre" />
                <Link to={`/jugadores/${enlace}`} className="btn-submit">buscar</Link>
            </form>
        </div>
     );
}
 
export default Jugadores;