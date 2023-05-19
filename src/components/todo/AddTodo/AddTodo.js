import React, { useState } from "react";
import "../AddTodo/AddTodo.css";

function AddTodo({ todo, setTodo }) {
  const [value, setValue] = useState("");

  //Функция добавление задачи с помощью кнопка

  function saveTodo() {
    if (value === "") return alert("Поле пусто, пожалуйста, введите задачу!");

    setTodo([
      ...todo,
      {
        id: Math.random(), // И вместо это можем поставить crypto.randomUUID()
        title: value,
        status: false,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
      },
    ]);
    setValue("");
  }

  //Функция добавить с помощью кнопка 'Enter'

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      saveTodo();
    }
  }

  return (
    <div className="inputs">
      <input
        placeholder="Введите задачу..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button  onClick={saveTodo}>Сохранить</button>
    </div>
  );
}

export default AddTodo;
