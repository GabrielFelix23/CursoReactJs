import React from 'react'

import Membros from './component/Membros'

class App extends React.Component{

    render(){
        return(
            <div>
                <Membros nome="Visitante"/>
            </div>
        )
    }
}

export default App