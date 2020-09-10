import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './pages/Home/index'
import Sobre from './pages/Sobre/index'
import Header from './components/header/index'
import Erro from './pages/Erro/index'
import Produto from './pages/produto/index'

const Routes = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/sobre" component={Sobre}/>
                <Route exact path="/produto/:id" component={Produto}/>

                <Route path="*" component={Erro}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes