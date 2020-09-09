import React from 'react'
import './style.css'
//https://sujeitoprogramador.com/rn-api/?api=posts

class App extends React.Component{

    state = {
       nutri: []
    }

    componentDidMount(){
        let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'
        fetch(url)
        .then((r) => r.json())
        .then((json) => {
            this.setState({nutri: json})
        })
    }

    render(){
        return(
            <div className="container">
                <header>
                    <strong>React Nutri</strong>
                </header>

                {this.state.nutri.map((item) => {
                    return(
                        <article key={item.id} className="post">
                            <strong className="titulo">{item.titulo}</strong>
                            <img src={item.capa} className="capa"/>
                            <p className="subtitulo">{item.subtitulo}</p>
                            <a className="botao" href="#">Acessar</a>
                        </article>
                    )
                })

                }
            </div>
        )
    }
}


export default App