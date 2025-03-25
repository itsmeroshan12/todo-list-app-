// code 

import "./app.css";
import React, {useState} from "react";
import { connect} from "react-redux";


const App = 
({todos, addTodo, removeTodo, toggleTodo}) => {
  const[text, setText] = useState(" ");

  const handleAddTodo = () => {
    if (text.trim ())
  }
}