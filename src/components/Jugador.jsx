import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import './styles/Jugador.scss'

const Jugador = () => {

    const { id } = useParams()
    
    const [jugador, setJugador] = useState({})
    
    useEffect(() => {
        async function consulta() {
    
            const query = await fetch(`http://lookup-service-prod.mlb.com/json/named.player_info.bam?sport_code='mlb'&player_id='${id}'`).then(response => response.json())
    
            const data = query.player_info.queryResults.row
            setJugador(data)
        }
        consulta()
    }, [])


    return (
        <div className="JugadorContendedor">
            {
                jugador ?
                    <div className="">
                        <h2>{jugador.name_display_first_last}</h2>
                        <ul>
                            <li>
                                <h3>nacionalidad:</h3>
                                <p>{jugador.birth_country}</p>
                            </li>
                            <li>
                                <h3>posicion:</h3>
                                <p>{jugador.primary_position_txt}</p>
                            </li>
                            <li>
                                <h3>equipo:</h3>
                                <p>{jugador.team_name}</p>
                            </li>
                            <li>
                                <h3>numero:</h3>
                                <p>{jugador.jersey_number}</p>
                            </li>
                            <li>
                                <h3>batea:</h3>
                                
                                    {
                                        jugador.bats == "R"? <p>derecho</p>: <p>izquierdo</p>
                                    }
                                
                            </li>
                            <li>
                                <h3>lanza:</h3>
                                
                                    {
                                        jugador.throws == "R"? <p>derecho</p>: <p>izquierdo</p>
                                    }
                                
                            </li>
                        </ul>
                    </div> :
                    <p>el jugador que buscaste no existe, recuerda primero nombre y luego apellido</p>
            }
        </div>
    );
}

export default Jugador;