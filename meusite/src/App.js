import React from 'react';
import firebase from './fireConnection'
 
export default class App extends React.Component {
    constructor(props){
 
        super(props);
        this.state={
            email: '',
            senha: ''
        }

        this.logar = this.logar.bind(this)
        this.sair = this.sair.bind(this)

        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                alert("Usuario logado com sucesso! \n Email: " + user.email)
            }
        })
    }

    logar(e){

        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
        .catch((error) => {
            if(error.code == 'auth/wrong-password'){
                alert("Senha incorreta")
            }
            else{
                alert("Codigo de erro " + error.code)
            }
        })
        e.preventDefault()
    }

    sair(){
        firebase.auth().signOut()
        alert("Deslogado com sucesso!")
    }
    
   render(){
        return(
            <div>
                <form onSubmit={this.logar}>
                    <label>Email: </label><br/>
                    <input type="text" value={this.state.email} 
                    onChange={(e) => this.setState({email: e.target.value})}/><br/>

                    <label>Senha: </label><br/>
                    <input type="text" value={this.state.senha} 
                    onChange={(e) => this.setState({senha: e.target.value})}/><br/>

                    <button type="submit">Entrar</button>
                </form>
                <br/>
                <button onClick={this.sair}>Sair</button>
            </div>
        )
   } 
}