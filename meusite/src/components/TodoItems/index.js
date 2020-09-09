import React from 'react'

class TodoItems extends React.Component{
    state = {
        
    }

    delete = this.delete.bind(this)

    delete(key){
        this.props.delete(key)
    }

    render(){
        return(
            <div>
                <ul>
                    {this.props.lista.map((item) => {
                        return(
                            <li onClick={() => this.delete(item.key)} key={item.key}>{item.text}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default TodoItems