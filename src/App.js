import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Error from "./components/error/Error";
import Infouser from "./components/listing/InfoUser";
import Listing from "./components/listing/Listing";
import Main from "./components/main/Main";
import Todo from "./components/todo/Todo";
import user from './components/img/stu.jpg'
import user2 from './components/img/i.webp'
import user3 from './components/img/doc.jpg'
import user4 from './components/img/prog.jpg'
import user5 from './components/img/stu1.jpg'
import user6 from './components/img/i2.jpg'
import user7 from './components/img/doc1.jpg'
import user8 from './components/img/prog1.jpg'


function App() {
  const users = [
    {
      // img: './stu.jpg',
      img:user,
      name: "Андрей",
      age: 20,
      work: "Студент",
      id: 1,
      btnDelete: "Удалить",
      btnEdit: "Изменить",
    },
    {
      // img: "./i.webp",
      img:user2,
      name: "Олег",
      age: 12,
      work: "Школьник",
      id: 2,
      btnDelete: "Удалить",
      btnEdit: "Изменить",
    },
    {
      // img: "./doc.jpg",
      img:user3,
      name: "Сергей",
      age: 36,
      work: "Доктор",
      id: 3,
      btnDelete: "Удалить",
      btnEdit: "Изменить",
    },
    {
      // img: "./prog.jpg",
      img:user4,
      name: "Николай",
      age: 29,
      work: "Программист",
      id: 4,
      btnDelete: "Удалить",
      btnEdit: "Изменить",
    },
    {
      // img: "./stu1.jpg",
      img:user5,
      name: "Саша",
      age: 28,
      work: "Студент",
      id: 5,
      btnDelete: "Удалить",
      btnEdit: "Изменить",
    },
    {
      // img: "./i2.jpg",
      img:user6,
      name: "Антон",
      age: 15,
      work: "Школьник",
      id: 6,
      btnDelete: "Удалить",
      btnEdit: "Изменить",
    },
    {
      // img: "./doc1.jpg",
      img:user7,
      name: "Коля",
      age: 39,
      work: "Доктор",
      id: 7,
      btnDelete: "Удалить",
      btnEdit: "Изменить",
    },
    {
      // img: "./prog1.jpg",
      img:user8,
      name: "Николай",
      age: 49,
      work: "Программист",
      id: 8,
      btnDelete: "Удалить",
      btnEdit: "Изменить",
    },
  ];
  return (
    <div className="link">
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/todo">Todo</Link>
        <Link to="/listing">Listing</Link>
        <Link to="/error">Error</Link>
      </div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/listing" element={<Listing users={users} />} />
        <Route path="/error" element={<Error />} />
        <Route path="/infouser/:id" element={<Infouser users={users} />} />
        <Route path="*" element={<h1>Такой страница не найдено!</h1>}/>
      </Routes>
    </div>
  );
}

export default App;
