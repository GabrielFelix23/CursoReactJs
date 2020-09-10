import React from 'react'
import {Link} from 'react-router-dom'

class Sobre extends React.Component{

    state = {
       
    }

    render(){
        return(
            <div>
                <h2>Página Sobre</h2><br/>
                <Link to="/">Ir para Home</Link>
            </div>
        )
    }
}


export default Sobre