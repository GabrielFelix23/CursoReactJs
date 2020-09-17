import React from 'react';
import firebase from 'firebase';
 
export default class App extends React.Component {
    constructor(props){
 
     super(props);
     this.state={
        lista: [],
        nome: '',
        idade: ''
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
        firebase.database().ref('usuarios').on('value', (snapshot) => {
            let state = this.state
            state.lista = []

            snapshot.forEach((ChildItem) => {
                state.lista.push({
                    key: ChildItem.key,
                    nome: ChildItem.val().nome,
                    idade: ChildItem.val().idade
                })
            })
            this.setState(state)
        })
    }
    
   
   render(){
        return(
            <div>
                {this.state.lista.map((item) => {
                    return(
                        <div>
                            <h1>Olá {item.nome}</h1>
                            <h2>Idade: {item.idade}</h2>
                        </div>
                    )
                })}
            </div>
        )
   } 
}