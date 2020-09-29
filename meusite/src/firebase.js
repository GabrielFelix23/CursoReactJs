import app from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

let firebaseConfig = {
    apiKey: "AIzaSyBKEAiZ-XOIzqaHrxTRCKFV1dqTdauKo1Y",
    authDomain: "reactapp-d6c0a.firebaseapp.com",
    databaseURL: "https://reactapp-d6c0a.firebaseio.com",
    projectId: "reactapp-d6c0a",
    storageBucket: "reactapp-d6c0a.appspot.com",
    messagingSenderId: "1051912974597",
    appId: "1:1051912974597:web:23f14409402a9ff730c76c"
};

class Firebase{
    constructor(){
        // Initialize Firebase
        app.initializeApp(firebaseConfig);
    }
    
    login(email,password){
        return app.auth().signInWithEmailAndPassword(email, password)
    }

    async register(nome, email, password){
        await app.auth().createUserWithEmailAndPassword(email, password)
        
        //currentUser = usuario atual
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

export default new Firebase()