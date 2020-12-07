import React, {useState, useEffect} from 'react'

function App(){
  const [tarefas, setTarefas] = useState([])
  
  const [input, setInput] = useState('')

  useEffect(() => {
    const tarefasStorange = localStorage.getItem('tarefas')

    if(tarefasStorange){
      setTarefas(JSON.parse(tarefasStorange))     
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
  }, [tarefas])
  
  
  function handleAdd(){
    setTarefas([...tarefas, input])
  }

  return(
    <div>
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
      
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
      <button type="button" onClick={handleAdd}>Adicionar</button>
    </div>
  )
}

export default App