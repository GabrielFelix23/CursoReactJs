import firebase from 'firebase/app'
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
  };
  // Initialize Firebase
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

export default firebase