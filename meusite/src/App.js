import React from 'react'

class Equipe extends React.Component{
    render(){
        return(
            <div>
                <Sobre nome={this.props.nome} cargo={this.props.cargo} idade={this.props.idade}/>
            </div>
        )
    }
}

class Sobre extends React.Component{
    render(){
        return(
            <div>
                <h2>Olá sou o {this.props.nome}</h2>
                <h2>Cargo: {this.props.cargo}</h2>
                <h2>Idade: {this.props.idade}</h2>
            </div>
        )
    }
}

function App(){
    return(
        <div>
            <h1>Conheça nossa equipe:</h1>
            <Equipe 
                nome="Gabriel" 
                cargo="Programador" 
                idade="22"
            />
            <Equipe 
                nome="Felix" 
                cargo="Engenheiro" 
                idade="30"
            />
        </div>
    )
}

export default App