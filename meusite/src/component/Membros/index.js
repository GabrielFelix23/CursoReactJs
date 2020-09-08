import React from 'react'

class Membros extends React.Component{
    state = {
        status: true
    }

    sair = this.sair.bind(this)
    
    sair(){
        this.setState({status: false})
    }

    entrar = this.entrar.bind(this)

    entrar(){
        this.setState({status: true})
    }

    render(){
        return(
            <div>
              {this.state.status ? 
                <div>
                    <h2>Bem vindo ao sistema</h2>
                    <button onClick={this.sair}>Sair</button>
                </div> 
                :
                <div>
                    <h2>Olá visitante, faça o seu login</h2>
                    <button onClick={this.entrar}>Entrar no sistema</button>
                </div>
              }
            </div>
        )
    }
}

export default Membros