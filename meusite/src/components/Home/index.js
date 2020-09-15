import React from 'react'

import Inicio from '../Inicios'
import Sobre from '../Sobre'
import Contato from '../Contato'
import '../../style.css'


class Home extends React.Component{
    render(){
        return(
            <div>
                <Inicio/>
                <Sobre/>
                <Contato/>
            </div>
        )
    }
}

export default Home