import React from 'react';
import './styles/Inicio.scss'

const Inicio = () => {
    return ( 
        <div className="Inicontenedor">
            <h1>Bienvenido aqui puedes buscar sobre equipos y jugadores de la mlb</h1>
            <p>esta pagina esta hecha con la api de MLB Data API</p>
            <p>sin uso comercial, solo personal</p>
            <a href="https://appac.github.io/mlb-data-api-docs/#header-getting-started" target="_blank" rel="noreferrer">ver mas sobre la api</a>
        </div>
     );
}
 
export default Inicio;