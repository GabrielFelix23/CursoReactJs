import firebase from 'firebase/app'
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
// Initialize Firebase
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase