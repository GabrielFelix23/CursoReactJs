import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import firebase from './firebase'

import Home from './components/Home'
import Header from './components/Header'
import './global.css' 

class App extends React.Component{

    state = {
        firebaseInitialized: false
    }

    componentDidMount(){
        firebase.isInitialized().then((resultado) => {
            //devolve o usuario
            this.setState({firebaseInitialized: resultado})
        })
    }

    render() {
        return this.state.firebaseInitialized != false ? (
            <BrowserRouter>
            <Header/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                </Switch>
            </BrowserRouter>
        ) : (
            <h1>Carregado...</h1>
        )
    }
}

export default App