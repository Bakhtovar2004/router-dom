import React, { useEffect, useState } from "react";
import Header from "../todo/Header/Header";
import AddTodo from "./AddTodo/AddTodo";
import TodoList from "./TodoList/TodoList";


export default function Todo() {
  const [todo, setTodo] = useState([

  ]);

//LocalStorage

  useEffect(() => {
    const saveUsers = localStorage.getItem("todos");
    if (saveUsers) {
      setTodo(JSON.parse(saveUsers));
    }
  }, []);
 

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);


  return (
    <div>
      <Header />
      <AddTodo todo={todo} setTodo={setTodo} />
      <TodoList todo={todo} setTodo={setTodo} />

    </div>
  );
}
