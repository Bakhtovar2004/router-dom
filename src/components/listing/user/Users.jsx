import React, { useState } from 'react'
import User from './User'
import Button from '../button/Button';
import AddUser from './AddUser';

export default function Users({ users }) {
    // const users = [
    //     { img: './stu.jpg', name: 'Андрей', age: 20, work: 'Студент', id: 1, btnDelete: 'Удалить', btnEdit: 'Изменить' },
    //     { img: './i.webp', name: 'Олег', age: 12, work: 'Школьник', id: 2, btnDelete: 'Удалить', btnEdit: 'Изменить' },
    //     { img: './doc.jpg', name: 'Сергей', age: 36, work: 'Доктор', id: 3, btnDelete: 'Удалить', btnEdit: 'Изменить' },
    //     { img: './prog.jpg', name: 'Николай', age: 29, work: 'Программист', id: 4, btnDelete: 'Удалить', btnEdit: 'Изменить' },
    //     { img: './stu1.jpg', name: 'Саша', age: 28, work: 'Студент', id: 5, btnDelete: 'Удалить', btnEdit: 'Изменить' },
    //     { img: './i2.jpg', name: 'Антон', age: 15, work: 'Школьник', id: 6, btnDelete: 'Удалить', btnEdit: 'Изменить' },
    //     { img: './doc1.jpg', name: 'Коля', age: 39, work: 'Доктор', id: 7, btnDelete: 'Удалить', btnEdit: 'Изменить' },
    //     { img: './prog1.jpg', name: 'Николай', age: 49, work: 'Программист', id: 8, btnDelete: 'Удалить', btnEdit: 'Изменить' },
    // ]
    const [sortBy, setSortBy] = useState(users);

    const handleDelete = (id) => {
        setSortBy(sortBy.filter((user) => user.id !== id));
    };

    const handleEdit = (id, updatedUser) => {
        setSortBy(sortBy.map((user) => (user.id === id ? { ...user, ...updatedUser } : user)));
    };

    function filterByWork(worked) {
        const byWork = users.filter((user) => user.work === worked)
        setSortBy(byWork)
    }


    const handleAdd = (newUser) => {
        setSortBy([...sortBy, newUser])
    }


    function sortUser() {
        const sortedUsers = sortBy.sort((a, b) => a.name > b.name ? 1 : -1).map(el => el);
        setSortBy(sortedUsers)
    }


    function sortUserBy() {
        const sortedUsers = sortBy.sort((a, b) => b.name > a.name ? 1 : -1).map(el => el);
        setSortBy(sortedUsers)
    }

    function sortsByAge() {
        const sortedUsers = sortBy.sort((a, b) => a.age > b.age ? 1 : -1).map(el => el);
        setSortBy(sortedUsers)


    }

    return (
        <div>
            <div>

                <AddUser handleAdd={handleAdd} sortBy={sortBy} setSortBy={setSortBy} />
                <Button users={users} setSortBy={setSortBy} sortUserBy={sortUserBy} sortsByAge={sortsByAge} sortUser={sortUser} filterByWork={filterByWork} />
            </div>
            <div className='cards'>
                {sortBy.map((user) => (
                    <User key={user.id} user={user} onDelete={handleDelete} onEdit={handleEdit} />
                ))}
                
            </div>
        </div>
    );
}

