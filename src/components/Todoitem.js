import React from 'react'

export const Todoitem = ({todo,onDelete}) => {
  return (
    <div>
     {todo.title}
     <button onClick={()=>{onDelete(todo)}} >Delete</button>
    </div>
  )
}
