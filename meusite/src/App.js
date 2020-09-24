import React from 'react'
import firebase from './fireConnection'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            senha: '',
            user: null
        }
        this.cadastrar = this.cadastrar.bind(this)
        this.logar = this.logar.bind(this)
        this.auth = this.auth.bind(this)
        this.sair = this.sair.bind(this)
    }

    componentDidMount(){
        this.auth()
    }

    auth(){
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.setState({
                    user: user
                })
            }
        })
    }

    cadastrar(){
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
        .catch((error) => {
            alert("Codigo de error: " + error.code)
        })
    }

    logar(){
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
        .catch((error) => {
            alert("Codigo de error: " + error.code)            
        })
    }

    sair(){
        firebase.auth().signOut().then(() => {
            this.setState({user: null})
        })
    }

    render(){
        return(
            <div>
                {this.state.user ? 
                <div>
                    <p>Painel Admin</p>
                    <p>Seja bem vindo :)</p>
                    <p>Email: {this.state.user.email}</p>
                    <p>ID: {this.state.user.uid}</p>
                    <button onClick={this.sair}>Sair</button>
                </div> : 
                <div>
                    <h1>Seja bem vindo</h1>
            
                    <label>Email: </label><br/>
                    <input type="text" value={this.state.email}
                        onChange={(e) => this.setState({email: e.target.value})}/><br/>

                    <label>Senha: </label><br/>
                    <input type="text" value={this.state.senha}
                        onChange={(e) => this.setState({senha: e.target.value})}/><br/>

                    <button onClick={this.cadastrar}>Cadatrar</button>
                    <button onClick={this.logar}>Logar</button>
                </div>
                } 
            </div>
        )
    }
}

export default App