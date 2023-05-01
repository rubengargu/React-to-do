import React from 'react'

export function TodoItem ({todo, toggleToDo}) {
    const {id,task,completed} = todo;

    const handleToDoClick = () =>{
      toggleToDo(id);
    }

  return <li><input type ="checkbox" checked ={completed} onChange={handleToDoClick}/>
  {task}
  </li>;
}
