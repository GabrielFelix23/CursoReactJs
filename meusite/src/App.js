import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import Header from './components/Header'
import './global.css'

class App extends React.Component{
    render() {
        return (
            <BrowserRouter>
            <Header/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                </Switch>
            </BrowserRouter>
        )
    }
}
export default App