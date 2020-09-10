import React from 'react'
import {Link} from 'react-router-dom'
import Home from '../../pages/Home/index'

class Header extends React.Component{

    state = {
       
    }

    render(){
        return(
            <div>
                Hearder meu projeto<br/><br/>
                <Link to="/">Ir para Home</Link><br/>
                <Link to="/sobre">Ir para Sobre</Link>
                <hr/>
            </div>
        )
    }
}


export default Header