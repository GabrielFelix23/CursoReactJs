import React, {Component} from 'react'

class Produto extends Component{
    state = {
        id: ''
    }

    componentDidMount(){
        const { id } = this.props.match.params
        this.setState({id: id})
    }

    render(){
        return(
            <div>
                <h1>Produto id {this.state.id}</h1>
            </div>
        )
    }
}

export default Produto