import React from 'react'
import firebase from 'firebase'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {

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
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
        
    }

    render(){
        return(
            <div>
                <h1>Funcionando!</h1>
            </div>
        )
    }
}


export default App