import React from 'react'

class App extends React.Component{

    state = {
        nome: '',
        email: '',
        senha: '',
        error: ''
    }

    cadastrar = this.cadastrar.bind(this)

    cadastrar(e){
        const {nome, email, senha} = this.state

        if(nome != '' && email != '' && senha != ''){
            alert(`Nome: ${nome} \nEmail: ${email} \nSenha: ${senha}`)
        }else{
            this.setState({error: "Ops! Parece que esta faltando algo"})
        }

       

        e.preventDefault()
    }

    render(){
        return(
            <div>
                <h1>Novo usuario</h1>
                {<p>{this.state.error}</p>}
                <form onSubmit={this.cadastrar}>
                    <label>Nome: </label>
                    <input type="text" value={this.state.nome} 
                    onChange={(e) => this.setState({nome: e.target.value})}/><br/>

                    <label>Email: </label>
                    <input type="email" value={this.state.email}
                    onChange={(e) => this.setState({email: e.target.value})}/><br/>

                    <label>Email: </label>
                    <input type="password" value={this.state.senha}
                    onChange={(e) => this.setState({senha: e.target.value})}/><br/>

                    <button type="submit">Cadastras</button>
                </form>
            </div>
        )
    }
}

export default App