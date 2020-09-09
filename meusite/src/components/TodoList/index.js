import React from 'react'
import TodoItems from '../TodoItems/index'

class TodoList extends React.Component{

    state = {
        tarefa: '',
        items: []
    }

    addItem = this.addItem.bind(this)
    log = this.log.bind(this)
    deleteItem = this.deleteItem.bind(this)

    addItem(e){
        if(this._tarefaInput.value != ''){
            let newItem = {
                text: this._tarefaInput.value,
                key: Date.now()
            }
            this.setState({
                items: [...this.state.items, newItem]
            })
        }
        e.preventDefault()
        this.setState({
            tarefa: ''
        })
    }

    log(){
        console.log(this.state.items)
    }

    deleteItem(key){
        console.log("Item a ser deletado: " + key)
        let filtro = this.state.items.filter((item) => {
            return(item.key != key)
        })
        this.setState({items: filtro})
    }

    render(){
        return(
            <div>
                <form onSubmit={this.addItem}>
                    <input type="text" placeholder="Nova tarefa?" name="tarefa" 
                    value={this.state.tarefa} 
                    onChange={(ev) => this.setState({tarefa: ev.target.value})}
                    ref={(event) => this._tarefaInput = event}/>

                    <button type="submit">
                        Adicionar
                    </button>
                </form>
                <button onClick={this.log}>Log</button>

                <TodoItems lista={this.state.items} delete={this.deleteItem}/>
                
            </div>
        )
    }
}


export default TodoList