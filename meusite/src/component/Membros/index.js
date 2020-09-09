import React from 'react'

import Feed from '../Feed/index'

class Membros extends React.Component{
    state = {
       feed: [
           {id: 1, username: "Gabriel", curtidas: 10, comentarios: 2},
           {id: 2, username: "Felix", curtidas: 5, comentarios: 10},
           {id: 3, username: "Silva", curtidas: 100, comentarios: 20},
           {id: 4, username: "Ana", curtidas: 1, comentarios: 0}
       ]
    }

    render(){
        return(
            <div>
                {this.state.feed.map((item) => {
                    return(
                        <Feed id={item.id} username={item.username}
                            curtidas={item.curtidas} comentarios={item.comentarios}
                        />
                    )
                })

                }
            </div>
        )
    }
}

export default Membros