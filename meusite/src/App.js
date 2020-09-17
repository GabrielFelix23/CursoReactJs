import React, {Component} from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
 
export default class App extends Component {
   constructor(props){
 
     super(props);
     this.state={
       token:'carregando',
       idade: '',
       nome: ''
     }
 
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
   
   render(){
     const{ token, nome, idade } = this.state
     return(
     <div>
       <h1>Token: {token}</h1>
       <h1>Nome: {nome}</h1>
       <h1>Idade: {idade}</h1>
     </div>)
   }
 
  }