import React from 'react'
import firebase from '../../firebase'
import './home.css'

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            posts: []
        }
    }    
        

    componentDidMount(){
        firebase.app.ref('posts').once('value', (snapshot) => {
            let state = this.state
            state.posts = []

            snapshot.forEach((childItem) => {
                state.posts.push({
                    key: childItem.key,
                    titulo: childItem.val().titulo,
                    image: childItem.val().image,
                    descricao: childItem.val().descricao,
                    autor: childItem.val().autor
                })
            })
            this.setState(state)
        })
    }

    render() {
        return (
            <section id="post">
                {this.state.posts.map((post) => {
                    return(
                       <article key={post.key}>
                           <header>
                               <div className="title">
                                   <strong className="title">Titulo: {post.titulo}</strong>
                                   <span className="span">Autor: {post.autor}</span>
                               </div>
                           </header>
                           <img src={post.image} alt="Capa do post"/>
                           <footer>
                               <p>Descrição: {post.descricao}</p>
                           </footer>
                       </article>
                    )
                })}
            </section>
        )
    }
}
export default Home