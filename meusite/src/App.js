import React from 'react'
import firebase from 'firebase'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            token: 'carregando ...',
            nome: '',
            idade: ''
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
        /*componentDidMount(){
            Olheiro
            firebase.database().ref('token').on('value', (snapshot) => {
                this.setState({
                    token: snapshot.val()
                })
            }) 
        }*/

        componentWillMount(){
            firebase.database().ref('token').once('value').then((snapshot) => {
                this.setState({
                    token: snapshot.val()
                })
            })
        }

        componentDidMount(){
            firebase.database().ref('usuarios').child(1)/*.child('nome')*/.on('value', (snapshot) => {
                this.setState({
                    nome: snapshot.val().nome,
                    idade: snapshot.val().idade
                })
            })
        }

    render(){
        const {token, nome, idade} = this.state
        return(
            <div>
                <h1>Token: {token}</h1>
                <h1>Nome: {nome}</h1>
                <h1>Idade: {idade}</h1>
            </div>
        )
    }
}

export default App