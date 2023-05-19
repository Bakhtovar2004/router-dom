import React from 'react'
import './Button.css'

export default function Button({  sortsByAge, filterByWork, users, setSortBy, sortUser, sortUserBy }) {
  



    return (
        <div className="btns">
            <button onClick={() => filterByWork('Доктор')}>Доктор</button>
            <button onClick={() => filterByWork('Программист')}>Программист</button>
            <button onClick={() => filterByWork('Школьник')}>Школьник</button>
            <button onClick={() => filterByWork('Студент')}>Студент</button>
            <button onClick={sortsByAge}>Сорт. по возр.</button>
            <button onClick={sortUser}>От А до Я</button>
            <button onClick={sortUserBy}>От Я до А</button>
            <button onClick={() => setSortBy(users)}>Все</button>
        </div>
    )
}
