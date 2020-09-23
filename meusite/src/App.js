import React from 'react'
import firebase from 'firebase'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {

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
          if(firebase.apps.length){
                firebase.initializeApp(firebaseConfig);
          }
        
    }

    render(){
        return(
            <div>
                <h1>Funcionando</h1>
            </div>
        )
    }
}

export default App