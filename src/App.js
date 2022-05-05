import "./App.css";
import Header from "./MyComponants/Header";
import { Todos } from "./MyComponants/Todos";
import { Footer } from "./MyComponants/Footer";
import { AddTodo } from "./MyComponants/AddTodo";
import React, { useState } from "react";

function App() {
  const onDelete = (todo) =>{
    let initTodo;
    if(localStorage.getItem("todos")==null){
      initTodo = []
    }
    else{
      initTodo = JSON.parse(localStorage.getItem("todos"))
    }
    console.log("I am onDelete of todo ",todo)

    // Deleting this way in react does not work
    // let index = todos.indexOf(todo)
    // todos.splice(index, 1)

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));

    localStorage.setItem("todos",JSON.stringify(todos))

  }

  const addTodo = (title,desc) =>{
    console.log("I am adding the todo",title,desc)
    let sno ;
    if(todos.length == 0){
     sno = 0;
    }else{
    sno = todos[todos.length - 1].sno + 1
    }
    const myTodo = {
      sno:sno,
      title: title,
      desc: desc
    }
    setTodos([...todos,myTodo])
    console.log(myTodo);

    localStorage.setItem("todos",JSON.stringify(todos))
  }


  const [todos,setTodos] = useState([]);
  return (
    <>
      <Header />
      <AddTodo addTodo={addTodo}/>
      <Todos  todos={todos} onDelete={onDelete}/>
      <Footer />
    </>
  );
}

export default App;
