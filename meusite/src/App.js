import React from 'react'
import './style.css'

class App extends React.Component{

    state = {
        numero: 0,
        botao: 'VAI'
    }

    timer = null
    vai = this.vai.bind(this)
    limpar = this.limpar.bind(this)

    vai(){
        if(this.timer != null){
            clearInterval(this.timer)
            this.timer = null
            this.setState({botao: "VAI"})
        }
        else{
            this.timer = setInterval(() => {
                this.setState({
                    numero: this.state.numero += 0.1,
                    botao: "PARAR"
                })
            }, 100)
        }
    }

    limpar(){
       if(this.timer != null){
           clearInterval(this.timer)
           this.timer = null
       }

       this.setState({
           numero: 0,
           botao: "VAI",
       })
    }

    render(){
        return(
            <div className="container">
                <img src={require("./Assets/cronometro.png")} className="img"/>
                <a className="timer">{this.state.numero.toFixed(1)}</a>

                <div className="areaBtn">
                    <a className="botao" onClick={this.vai}>{this.state.botao}</a>
                    <a className="botao" onClick={this.limpar}>LIMPAR</a>
                </div>
            </div>
        )
    }
}


export default App