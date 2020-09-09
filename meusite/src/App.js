import React from 'react'
import TodoList from './components/TodoList/index'

class App extends React.Component{

    state = {
       
    }

    render(){
        return(
            <div>
                <h1>Lista de tarefas</h1>
                <TodoList/>
            </div>
        )
    }
}


export default App