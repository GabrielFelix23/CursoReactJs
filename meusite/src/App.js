import React from 'react'
import firebase from 'firebase'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            nomeInput: '',
            idadeInput: '',
            tokenInput: '',
            token: '',
            nome: '',
            idade: '',
            cargo:''
        }
        this.cadastrar = this.cadastrar.bind(this)

        let firebaseConfig = {
            apiKey: "AIzaSyBKEAiZ-XOIzqaHrxTRCKFV1dqTdauKo1Y",
            authDomain: "reactapp-d6c0a.firebaseapp.com",
            databaseURL: "https://reactapp-d6c0a.firebaseio.com",
            projectId: "reactapp-d6c0a",
            storageBucket: "reactapp-d6c0a.appspot.com",
            messagingSenderId: "1051912974597",
            appId: "1:1051912974597:web:23f14409402a9ff730c76c"
        };
        // Initialize Firebase
        if(!firebase.apps.length){
            firebase.initializeApp(firebaseConfig);
        }
    }

        componentWillMount(){
            firebase.database().ref('token').on('value', (snapshot) => {
                this.setState({
                    token: snapshot.val()
                })
            })
        }

        componentDidMount(){
            firebase.database().ref('usuarios').child(1).on('value', (snapshot) => {
                this.setState({
                    nome: snapshot.val().nome,
                    idade: snapshot.val().idade,
                    cargo: snapshot.val().cargo
                })
            })
        }

        cadastrar(e){
            //Inserindo um novo dado!
            //firebase.database().ref('token').set(this.state.tokenInput)
            //Alterando dado
            //firebase.database().ref('token').set(this.state.tokenInput)
            //Alterando dado de dentro de uma tabela
            //firebase.database().ref('usuarios').child(1).child('idade').set(this.state.tokenInput)
            //inserindo um novo dado
            //firebase.database().ref('usuarios').child(1).child('cargo').set(this.state.tokenInput)
            //Deletando um dado especifico
            //firebase.database().ref('usuarios').child(1).child("cargo").remove()

            let usuarios = firebase.database().ref('usuarios') 
            let chave = usuarios.push().key

            usuarios.child(chave).set({
                nome: this.state.nomeInput,
                idade: this.state.idadeInput
            })
            
            e.preventDefault()
        }

    render(){
        const {token, nome, idade, cargo} = this.state
        return(
            <div>
                <form onSubmit={this.cadastrar}>
                    <label>Nome: </label><br/>
                    <input type="text" value={this.state.nomeInput} 
                        onChange={(e) => this.setState({nomeInput: e.target.value})}/><br/>
                    
                    <label>Idade: </label><br/>
                    <input type="text" value={this.state.idadeInput} 
                        onChange={(e) => this.setState({idadeInput: e.target.value})}/><br/><br/>
                    
                    <button type="submit">Cadastrar</button>
                </form>

                <h1>Token: {token}</h1>
                <h1>Nome: {nome}</h1>
                <h1>Idade: {idade}</h1>
                <h1>Cargo: {cargo}</h1>
            </div>
        )
    }
}

export default App