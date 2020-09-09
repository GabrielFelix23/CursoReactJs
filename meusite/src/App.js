import React from 'react'
import './estilo.css'

class App extends React.Component{
    frases = [
        "frase 1",
        "frase 2",
        "frase 3",
        "frase 4",
        "frase 5",
        "frase 6",
    ]

    state = {
        textoFrase: ''
    }

    quebraBiscoito = this.quebraBiscoito.bind(this)

    quebraBiscoito(){
        let numeroAleatorio = Math.floor(Math.random() * this.frases.length)
        
        this.setState({
            textoFrase: '" ' + this.frases[numeroAleatorio] + ' "'
        })
        
    }

    render(){
        return(
            <div className="container">
                <img src={require("./Assets/biscoito.png")} className="img"/>
                <h3 className="textoFrase">{this.state.textoFrase}</h3>
                <Botao nome="Abrir Biscoito" acaoBotao={this.quebraBiscoito}/>
            </div>
        )
    }
}

class Botao extends React.Component{
    render(){
        return(
            <div>
                <button onClick={this.props.acaoBotao} className="botao">{this.props.nome}</button>
            </div>
        )
    }
}

export default App