import React, { useState } from 'react';
export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) =>{
        e.preventDefault();
        if(title.length === 0 || desc.length === 0)
        {
            alert("Title or desc can not be blanked!!")
        }
        else
        {
            props.addTodo(title,desc);
            setTitle("");
            setDesc("");
        }
        
    }
  return (
    <div className="container">
        <h1>Add A ToDo</h1>
        <form onSubmit={submit}>
  <div class="form-group">
    <label for="exampleInputEmail1">Title</label>
    <input type="text" class="form-control" value={title} onChange = {(e)=>
        setTitle(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Description</label>
    <textarea class="form-control" value={desc} onChange = {(e)=>
        setDesc(e.target.value)} id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  
  <button type="submit" class="btn btn-success my-3">Add</button>
</form>
    </div>
  )
}
