import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './pages/Home/index'
import Sobre from './pages/Sobre/index'
import Header from './components/header/index'

const Routes = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/sobre" component={Sobre}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes