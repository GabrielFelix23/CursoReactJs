import React from 'react'

class Feed extends React.Component{
    render(){
        return(
            <div key={this.props.id}>
                <h3>{this.props.username}</h3>
                <a>{this.props.curtidas > 1 ? this.props.curtidas + " Curtidas " : this.props.curtidas + " Curtida "}
                    {this.props.comentarios > 1 ? this.props.comentarios + " Comentarios " : this.props.comentarios + " Comentario "}
                </a>
                <hr/>
            </div>
        )
    }
}

export default Feed