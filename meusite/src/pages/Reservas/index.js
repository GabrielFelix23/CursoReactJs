import React from 'react'
import {useSelector} from 'react-redux' 
import './style.css'
import {MdDelete} from 'react-icons/md'

export default function Reserva(){
    const reserves = useSelector(state => state.reserve)

    return(
        <div>
            <h1 className="title">Você solicitou {reserves.length} reserva</h1>

            {reserves.map(reserve => (
                <div className="reservas" key={reserve.id}>
                    <img src={reserve.image}
                    alt={reserve.title}/>
                    
                    <strong>{reserve.title}</strong>
                    <strong>Quantidade: 2</strong>
                    
                    <button type="button" onClick={() => {}}>
                        <MdDelete size={20} color="#000"/>
                    </button> 
                </div>
            ))}

            <footer>
                <button type="button">Solicitar Reservas</button>
            </footer>
        </div>
    )
}