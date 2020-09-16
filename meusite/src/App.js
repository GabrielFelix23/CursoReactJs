import React from 'react'
import firebase from 'firebase'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            token: "Carregando",
            nome: '',
            idade: ''
        }
        let firebaseConfig = {
            apiKey: "AIzaSyCYAZYyMLRVduH9wdYSJVgEihqL6yNUBZM",
            authDomain: "reactapp-8a8b8.firebaseapp.com",
            databaseURL: "https://reactapp-8a8b8.firebaseio.com",
            projectId: "reactapp-8a8b8",
            storageBucket: "reactapp-8a8b8.appspot.com",
            messagingSenderId: "740651159400",
            appId: "1:740651159400:web:3f44aae97c1b11ae0b10dd",
            measurementId: "G-MH25SEM3PQ"
        }
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig)
        
          /*Olheiro
          firebase.database().ref('token').on('value', (snapshot) => {
              let state = this.state
              state.token = snapshot.val()
              this.setState(state)
          })*/

          firebase.database().ref('token').once('value').then((snapshot) => {
            let state = this.state
            state.token = snapshot.val()
            this.setState(state)
          })

          firebase.database().ref('usuarios').child(1).on('value', (snapshot) => {
              let state = this.state
              state.nome= snapshot.val().nome
              state.nome= snapshot.val().idade
              this.setState(state)
          })
    }
       
    

    render(){
        return(
            <div>
                <h1>Token: {this.state.token}</h1>
                <h1>Nome: {this.state.nome}</h1>
                <h1>Idade: {this.state.idade}</h1>
            </div>
        )
    }
}


export default App