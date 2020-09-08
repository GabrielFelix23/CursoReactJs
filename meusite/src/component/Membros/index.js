import React from 'react'

class Membros extends React.Component{
    state = {
        nome: this.props.nome
    }

    entrar = this.entrar.bind(this)

    entrar(nome){
        this.setState({
            nome: nome
        })
    }

    render(){
        return(
            <div>
                <h2>Bem-vindo(a) {this.state.nome}</h2>
                <button onClick={() => this.entrar("Gabriel")}>Entrar como Gabriel</button>
                <button onClick={() => this.setState({nome: ""})}>Sair</button>
            </div>
        )
    }
}

export default Membros