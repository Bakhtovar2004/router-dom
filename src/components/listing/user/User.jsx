import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './User.css';


export default function User({ user, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user);

  const handleDelete = () => {
    onDelete(user.id);
  };

  const handleToggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    onEdit(user.id, editedUser);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedUser(user);
    setIsEditing(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  if (isEditing) {
    return (
      <div>
        <div className="cardEdit">
          <img src={editedUser.img} alt="" />
          <input
            type="text"
            name="name"
            value={editedUser.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="age"
            value={editedUser.age}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="work"
            value={editedUser.work}
            onChange={handleInputChange}
          />
          <div className='btnEdit'>
            <button onClick={handleSave}>Сохранить</button>
            <button onClick={handleCancel}>Отмена</button>
          </div>
        </div>
      </div>
    );
  }

  return (

    <div>

      <div className="card">
        <img src={user.img} alt="" />
        <h2>{user.name}</h2>
        <h3>{user.age} year old</h3>
        <h3>{user.work}</h3>
        <div className="style">
          <button onClick={handleDelete}>Удалить</button>
          <button onClick={handleToggleEdit}>Изменить</button>
          <Link to={`/infouser/${user.id}`}>
            <button>Подробнее</button>
          </Link>
        </div>

      </div>
   
    </div>



  );
}
