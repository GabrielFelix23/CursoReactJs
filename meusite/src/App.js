import React from 'react'

import { Container, Header, Titulo, BemVindo} from './style'

class App extends React.Component{

    state = {
       
    }

    render(){
        return(
            <Container>
                <Header>
                    <Titulo>Projeto Styled</Titulo>
                </Header>

                <BemVindo cor="00ff00">Bem vindo</BemVindo>
            </Container>
        )
    }
}


export default App

/**
    <div className="container">
        <header className="header">
            <a className="titulo">Projeto Styled</a>
        </header>

        <h1>Bem vindo ao sistema!</h1>
    </div>
 */