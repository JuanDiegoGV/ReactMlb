import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import './styles/Jugador.scss'

const Jugador = () => {

    const { nombre } = useParams()

    const [jugador, setJugador] = useState({})

    useEffect(() => {
        consulta()
    }, [])

    async function consulta() {

        const query = await fetch(`http://lookup-service-prod.mlb.com/json/named.search_player_all.bam?sport_code='mlb'&active_sw='Y'&name_part='${nombre}%25'`).then(response => response.json())

        const data = query.search_player_all.queryResults.row
        console.log(data);
        setJugador(data)
    }

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
                                <p>{jugador.position}</p>
                            </li>
                            <li>
                                <h3>equipo:</h3>
                                <p>{jugador.team_full}</p>
                            </li>
                            <li>
                                <h3>liga:</h3>
                                <p>{jugador.league}</p>
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