import React from 'react'
import {Link} from 'react-router-dom'

class Erro extends React.Component{

    state = {
       
    }

    render(){
        return(
            <div>
                <h2>Página Não encontrada</h2><br/>
                <h3>Você está procurando por:</h3>
                <Link to="/">Home</Link><br/>
                <Link to="/Sobre">Sobre</Link>
            </div>
        )
    }
}


export default Erro