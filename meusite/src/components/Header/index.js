import React from 'react'
import {HashLink as Link} from 'react-router-hash-link'

class Header extends React.Component{

    render(){
        return(
            <header id="Home">
                <div className="menu">
                    <nav>
                        <ul>
                            <li><Link smooth to="#Home">Home</Link></li>
                            <li><Link smooth to="#sobre">Sobre</Link></li>
                            <li><Link smooth to="#contato">Contato</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}


export default Header