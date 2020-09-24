import React from 'react'
import firebase from 'firebase'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            lista: []
        }

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

    componentDidMount(){
        firebase.database().ref('usuarios').on('value', (snapshot) => {
            let state = this.state
            state.lista = []

            snapshot.forEach((childItem) => {
                state.lista.push({
                    key: childItem.key,
                    nome: childItem.val().nome,
                    idade: childItem.val().idade
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
                            <h1> id: {item.key}</h1>
                            <h1>Olá {item.nome}</h1>
                            <h2>Idade: {item.idade} anos</h2>
                        </div>
                   )
               })}
            </div>
        )
    }
}

export default App