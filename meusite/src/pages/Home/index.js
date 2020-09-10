import React from 'react'
import {Link} from 'react-router-dom'

class Home extends React.Component{

    state = {
       
    }

    render(){
        return(
            <div>
                <h2>Bem vindo a pagina home</h2><br/>
                <Link to="/sobre">Ir para sobre</Link>
            </div>
        )
    }
}


export default Home