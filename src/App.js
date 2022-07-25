
import './App.css';
import Header from "./components/Header"
import {Todos} from "./components/Todos"
import {Footer} from "./components/Footer"
import {AddTodo} from "./components/AddTodo"
import React, { useState,useEffect } from 'react';

function App() {
  let initTodo;
  if(localStorage.getItem('todos') === null){
      initTodo = [];
  }
  else
  {
    initTodo = JSON.parse(localStorage.getItem('todos'));
  }
  const onDelete = (todo)=> {
    console.log("onDelete",todo);
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1); deleting this way in react does not work
    setTodos(todos.filter((e)=>{
        return e!==todo;
      }))

      localStorage.setItem('todos' , JSON.stringify(todos));
  }

  const addTodo = (title,desc)=> {

    console.log(title,desc);
    let sno;
    if(todos.length === 0)
    sno = 1;
    else
    sno = todos[todos.length - 1].sno + 1;

    const myTodo = {
      sno : sno,
      title : title,
      desc : desc,
    }
    console.log(myTodo);
    setTodos([...todos,myTodo]);
    // setTitle("");
    // setDesc("");
  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem('todos' , JSON.stringify(todos));
    
  }, [todos])
  // jaise hi koi change ho todos me local storage wali line call kr do
  

  return (
   <>
   <Header title="ToDo-List" searchBar={false}/>
   <AddTodo addTodo={addTodo}/>
   <Todos todos={todos} onDelete={onDelete}/>
   <Footer/>
   </>
  );
}

export default App;
