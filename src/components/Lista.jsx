import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './styles/Lista.scss'

const Lista = () => {

    const { nombre } = useParams()

    const [Lista, setLista] = useState([])

    useEffect(() => {
        consulta()
    }, [])

    async function consulta() {

        const query = await fetch(`http://lookup-service-prod.mlb.com/json/named.search_player_all.bam?sport_code='mlb'&active_sw='Y'&name_part='${nombre}%25'`).then(response => response.json())

        const data = query.search_player_all.queryResults.row
        if (Array.isArray(data)) {
            setLista(data)
        }else if(data == undefined){
            setLista(undefined)
        }else{
            setLista([data])
        }
       
    }

    return (
        <div className="ListaContenededor">
            {
                Lista == undefined?
                <p>el jugador que buscaste no existe, recuerda primero nombre y luego apellido</p>:
                Lista.map(jugador => (
                    <div key={jugador.player_id} className="">
                        <h4>{jugador.name_display_first_last} - {jugador.team_full}</h4>
                        <Link to={`/jugadores/jugador/${jugador.player_id}`} className="btn-jugador">ver jugador</Link>
                    </div>
                    ))
                    
            }
        </div>
    );
}

export default Lista;