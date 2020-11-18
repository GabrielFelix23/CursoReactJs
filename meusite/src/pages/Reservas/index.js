import React from 'react'
import './style.css'
import {MdDelete} from 'react-icons/md'

export default function Reserva(){
    return(
        <div>
            <h1 className="title">Você solicitou 1 reserva</h1>

            <div className="reservas">
                <img src="https://sujeitoprogramador.com/wp-content/uploads/2019/12/maceio.jpg"
                alt="Maceio"/>
                
                <strong>Viagem Maceio 7 Dias</strong>
                <strong>Quantidade: 2</strong>
                
                <button type="button" onClick={() => {}}>
                    <MdDelete size={20} color="#000"/>
                </button> 
            </div>

            <footer>
                <button type="button">Solicitar Reservas</button>
            </footer>
        </div>
    )
}