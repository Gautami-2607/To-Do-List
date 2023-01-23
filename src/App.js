import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";
import {AddTodo} from "./MyComponents/AddTodo";
import React, {useState, useEffect} from 'react';
import { About } from './MyComponents/About';


function App() {
  
  let initTodo;
  if(localStorage.getItem("todos") === null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I am ondelete of todo",todo);
    // Deleting in this wai in react does not work
    //let index = todos.indexOf(todo);
    //todos.splice(index, 1);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    console.log("deleted", todos)
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc)=>{
    console.log("I am adding this todo", title, desc)
    let sno;
    if(todos.length === 0){
      sno = 0;
    }
    else{
      sno = todos[todos.length - 1].sno + 1;
    }
    //let sno = todos[todos.length -1].sno +1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
    
  }


  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  },[todos])

  /* To display Todos staticly
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "GO to the market",
      desc: "You need to go to the market to get this job done."
    },

    {
      sno: 2,
      title: "GO to the mall",
      desc: "You need to go to the market to get this job done."
    },

    {
      sno: 3,
      title: "GO to the ghat",
      desc: "You need to go to the market to get this job done."
    }
  ]
  )
  */

  let Styles = {
    backgroundColor: "#b8efdb"
  }

  return (
    <div style={Styles}>
    <Header title="My Todo List" searchBar={true} />
    <AddTodo addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete} />
    <Footer />
    </div>
  );
}

export default App;
