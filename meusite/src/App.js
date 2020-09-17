import React, {Component} from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
 
export default class App extends Component {
   constructor(props){
 
     super(props);
     this.state={
        nomeInput: '',
        idadeInput: '',
        token: 'Carregando...',
        idade: '',
        nome: '',
     }

     this.cadastrar = this.cadastrar.bind(this)
 
     let firebaseConfig = {
        apiKey: "AIzaSyBSHlhNc19IjPFszn-KV2hmPSpu9YO6PMY",
        authDomain: "reactjs-3f777.firebaseapp.com",
        databaseURL: "https://reactjs-3f777.firebaseio.com",
        projectId: "reactjs-3f777",
        storageBucket: "reactjs-3f777.appspot.com",
        messagingSenderId: "564769499349",
        appId: "1:564769499349:web:8ed1aef108cdedc1ba1a5c"
      };
      // Initialize Firebase
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
 
}
 
    componentDidMount(){
        firebase.database().ref('token').on('value', (snapshot)=>{
            let state = this.state;
            state.token = snapshot.val()
            this.setState(state);
        })
    }
    componentDidMount(){
        firebase.database().ref('usuarios').child(1).on('value', (snapshot)=>{
            let state = this.state;
            state.nome = snapshot.val().nome
            state.idade = snapshot.val().idade
            this.setState(state);
        })
    }

    cadastrar(e){
        //Inserindo um novo dado
        //firebase.database().ref('token').set(this.state.tokenInput)
        //editando valor
        //firebase.database().ref('usuarios').child(1).child('idade').set(this.state.tokenInput)
        //add atributo
        //firebase.database().ref('usuarios').child(1).child('cargo').set(this.state.tokenInput)
        //deletando um dado especifico
        //firebase.database().ref('usuarios').child(1).child('cargo').remove()
        //inseriondo novos dados na tabela
        let usuarios = firebase.database().ref('usuarios')
        let chave = usuarios.push().key

        usuarios.child(chave).set({
            nome: this.state.nomeInput,
            idade: this.state.idadeInput
        })
        e.preventDefault()
    }
   
   render(){
     const{ token, nome, idade } = this.state
     return(
     <div>

         <form onSubmit={this.cadastrar}>
            <label>Nome</label><br/>
            <input type="text" value={this.state.nomeInput}
                onChange={(e) => this.setState({nomeInput: e.target.value})}/><br/>
            <label>Idade</label><br/>
            <input type="text" value={this.state.idadeInput}
                onChange={(e) => this.setState({idadeInput: e.target.value})}/><br/>

            <button type="submit">Cadastrar</button>
         </form>
       <h1>Token: {token}</h1>
       <h1>Nome: {nome}</h1>
       <h1>Idade: {idade}</h1>
     </div>)
   }
 
  }