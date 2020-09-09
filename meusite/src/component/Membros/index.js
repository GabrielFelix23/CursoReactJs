import React from 'react'

import Feed from '../Feed/index'

class Membros extends React.Component{
    state = {
        email: "teste@teste.com",
        senha: '123',
        sexo: 'masculino'
    }

    trocaEmail = this.trocaEmail.bind(this)
    trocaEmail(e){
        let valorDigitado = e.target.value
        
        this.setState({
            email: valorDigitado
        })
    }

    render(){
        return(
            <div>
              <h2>Login</h2>
              Email
              <input type="email" name="email" value={this.state.email} onChange={this.trocaEmail}/><br/>
              Senha
              <input type="password" name="password" value={this.state.senha} onChange={(e) => this.setState({senha: e.target.value})}/><br/>

              Sexo
              <select value={this.state.sexo} onChange={(e) => this.setState({sexo: e.target.value})}>
                  <option value="Masculino">masculino</option>
                  <option value="Feminino">Feminino</option>
              </select>


            
            <h3>{this.state.email}</h3>
            <h3>{this.state.senha}</h3>
            <h3>{this.state.sexo}</h3>
            </div>
        )
    }
}

export default Membros