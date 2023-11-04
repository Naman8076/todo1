import React, { useState } from "react";
import "./home.css";
import swal from "sweetalert"

// import { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import TodoList from "./TodoList";
const Home = () => {
  const navigate = useNavigate();
  const username = JSON.parse(localStorage.getItem("user"));
  const logedout = () => {
    localStorage.removeItem("logeduser");
    navigate("/login");
  };

  const[todo,setTodo]=useState({
    title:"",
    done:false
  });
const[todoArr,setTodoArr]=useState([]);

let todos=localStorage.hasOwnProperty("todos")? JSON.parse(localStorage.getItem("todos")):[]


const onchange=(event)=>{
let {value}=event.target
let obj={}
obj["title"]=value
obj["done"]=false
setTodo(obj);
}

const createTodo=(event)=>{
  const {name}=event.target
  if(event.key==="Enter" || name==="addTodo")
  {
    if(todo.title!=="")
    {
      todos.unshift(todo)
      localStorage.setItem('todos',JSON.stringify(todos))
      setTodo({title:"",done:false})
    }
    else{
        swal("OOPS","Please write todo first","error")
    }
  }
}

const completeTodo=(i)=>{
  if(todos[i]["done"]!==true)
  {
    todos[i]["done"]=true
    localStorage.setItem("todos",JSON.stringify(todos))
    setTodoArr(todos)
    swal("Good","todo completed","Sucess");
  }
}

const deleteTodo=(i)=>{
  swal({
title:"areu sure",
text:"once delete u never recover",
icon:"warning",
buttons:true,
dangerMode:true
  }).then(res=>{
    if(res)
    {
      todos.splice(i,1)
      localStorage.setItem('todos',JSON.stringify(todos))
      setTodoArr(todos)
    }
  })
  }

  return (
    <>
     <div className="header">
     <div className="btn-div">
        <button className="btn-addTodologout" type="button" onClick={logedout}>
          Loggedout
        </button>
      </div>
      <div>
        <h2>name:{username.name}</h2>
      </div>
     </div>

      <div className="box">
        <div className="text-end">
          <h2>React-todo</h2>
          <h4>Add a new todo</h4>
        </div>
        <div className="text-addTodo">
          <input type="text"
          name="todo"
          placeholder="write-here..."
          value={todo.title}
          onKeyPress={createTodo}
          onChange={onchange}
           />
           <button onClick={createTodo} className="btn-addTodo" type="button" name="addTodo">Add Task</button>
        </div>
      </div>
      <TodoList todoArr={todoArr}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />
    </>
  );
};

export default Home;
