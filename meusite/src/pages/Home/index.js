import React from 'react'
import {Link} from 'react-router-dom'
import './home.css'

class Home extends React.Component{
    state = {
        filmes: []
    }

    componentDidMount(){
        this.loadFilmes()
    }

    loadFilmes = this.loadFilmes.bind(this)
    loadFilmes(){
        let url = 'https://sujeitoprogramador.com/r-api/?api=filmes'
        fetch(url)
        .then((r) => r.json())
        .then((json) => {
            this.setState({filmes: json})
            console.log(json)
        })
    }

    render() {
        return (
            <div className="container">
                <div className="lista-filmes">
                    {this.state.filmes.map((filme) => {
                        return(
                            <article key={filme.id} className="filme">
                                <strong>{filme.nome}</strong>
                                <img src={filme.foto} alt="capa"/>
                                <Link to={`/filme/${filme.id}`}>Acessar</Link>
                            </article>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Home