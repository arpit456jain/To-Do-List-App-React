import React from 'react'
import { Todoitem } from './Todoitem'

export const Todos = (props) => {
  let myStyle = {
    minHeight : "30vh"
  }
  return (
    <div className="container" style={myStyle}>
        <h3>To Dos List</h3>
        {props.todos.length === 0 ? "No todos to display" : 
        props.todos.map((todo)=>{
            return(  
            <>
            <Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
            </>)
        })}

        
    </div>

  )
}
