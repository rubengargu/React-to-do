import React, { useLayoutEffect } from 'react'
import { TodoItem } from "./TodoItem";

export function TodoList({todos, toggleToDo}) {
  return (
   <ul>
   {todos.map((todo) =>(
    <TodoItem key={todo.id} todo ={todo} toggleToDo={toggleToDo}/>

   ))}

  </ul>
  )
}

