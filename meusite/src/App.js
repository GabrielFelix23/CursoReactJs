import React from 'react'

const BemVindo = (props) => {
    return(
        <div>
            <h2>Bem vindo(a) {props.nome}</h2>
            <h3>Tenho {props.idade} anos</h3>
        </div>
    )
}

function App(){
    return(
        <div>
            Olá mundo!
            <BemVindo nome={"Gabriel"} idade={"32"}/>
            <BemVindo nome={"Felix"} idade={"22"}/>
            <h1>Curso de React</h1>
        </div>
    )
}

export default App