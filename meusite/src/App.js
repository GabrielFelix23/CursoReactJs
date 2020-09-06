import React from 'react'

class App extends React.Component{
    state = {
        estado: "",
        contador: 0
    }

    aumentar = this.aumentar.bind(this)

    aumentar(){
        this.setState({
            contador: this.state.contador += 1,
            estado: "Aumentando"
        })
    }

    diminuir = this.diminuir.bind(this)

    diminuir(){
        this.setState({
            contador: this.state.contador -+ 1,
            estado: "Diminuindo"
        })
    }

    render(){
        return(
            <div>
                <h1>Contador</h1>

                <h3>
                    <h5>{this.state.estado}</h5>
                    <button onClick={this.diminuir}>-</button> 
                    {this.state.contador} 
                    <button onClick={this.aumentar}>+</button>
                </h3>
            </div>
        )
    }
}

export default App