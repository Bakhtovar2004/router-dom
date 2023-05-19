import React, { useState } from "react";
import "../TodoList/TodoList.css";

function TodoList({ todo, setTodo }) {
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState("");

  // Функция удаление задачи

  function deleteTodo(id) {
    let newTodo = todo.filter((item) => item.id !== id);
    setTodo(newTodo);
  }

  // Функция статус задачи

  function todoStatus(id) {
    let newTodo = todo.map((item) => {
      if (item.id === id) {
        item.status = !item.status;
      }
      return item;
    });
    setTodo(newTodo);
  }

  //Функция изменение задачи

  function editTodoItem(id, title) {
    setEdit(id);
    setValue(title);
  }

  //Функция сохранение при изменение задачи

  function saveEditedTodoItem(id) {
    let newTodo = todo.map((item) => {
      if (item.id === id) {
        item.title = value;
      }
      return item;
    });
    setTodo(newTodo);
    setEdit(null);
  }

  //Функция рендер задачи

  function renderTodoItem(item) {
    return (
      <div key={item.id}>
        {edit === item.id ? (
          <div>
            <input value={value} onChange={(e) => setValue(e.target.value)} />
          </div>
        ) : (
          <div className={`todo-title ${item.status ? "completed" : ""}`}>
            {item.title} ({item.date} {item.time})
          </div>
        )}
        {edit === item.id ? (
          <div>
            <button onClick={() => saveEditedTodoItem(item.id)}>
              Сохранить
            </button>
          </div>
        ) : (
          <div className="btns1">
            <button onClick={() => deleteTodo(item.id)}>Удалить</button>
            <button
              onClick={() => editTodoItem(item.id, item.title)}
              disabled={item.status}
            >
              Редактировать
            </button>
            <button onClick={() => todoStatus(item.id)}>
              {item.status ? "Открыть" : "Закрыть"}
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="todo-list">
      {todo.length > 0 ? (
        <div className="inputs">
          {todo.map(renderTodoItem)}
          <div className="task-counter">
            Задач: {todo.filter((item) => !item.status).length}/{todo.length}
          </div>
        </div>
      ) : (
        <div className="no-tasks">Нет задач</div>
      )}
    </div>
  );
}

export default TodoList;
