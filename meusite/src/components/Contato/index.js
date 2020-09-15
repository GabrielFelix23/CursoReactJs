import React from 'react'
import {HashLink as Link} from 'react-router-hash-link'

class Contato extends React.Component{
    render(){
        return(
            <div className="home" id="contato">
                <h1>Entre em Contato</h1>
                <h2>Telefone; (XX) 9 9999-9999</h2>
                <h3>Rua: Alguma Rua</h3>

                <Link smooth to="#Home" style={{color: '#fff'}}>Ir para Home</Link>
            </div>
        )
    }
}

export default Contato