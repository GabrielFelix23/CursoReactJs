import app from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

    let firebaseConfig = {
        apiKey: "AIzaSyBSHlhNc19IjPFszn-KV2hmPSpu9YO6PMY",
        authDomain: "reactjs-3f777.firebaseapp.com",
        databaseURL: "https://reactjs-3f777.firebaseio.com",
        projectId: "reactjs-3f777",
        storageBucket: "reactjs-3f777.appspot.com",
        messagingSenderId: "564769499349",
        appId: "1:564769499349:web:8ed1aef108cdedc1ba1a5c"
    }

class Firebase extends React.Component{

    constructor(props){
        super(props)
        this.state{

        }   
        
        componentDidMount(){
                // Initialize Firebase
                firebase.initializeApp(firebaseConfig);
            }
        
    }
       
    

    login(email, password){
        return app.auth().signInWithEmailAndPassword(email, password)
    }

    async register(nome, email, password){
        await app.auth().createUserWithEmailAndPassword(email, password)

        const uid = app.auth().currentUser.uid

        return app.database().ref('usuarios').child(uid).set({
            nome: nome
        })
    }

    isInitialized(){
        return new Promise(resolve => {
            app.auth().onAuthStateChanged(resolve)
        })
    }
}

export default Firebase