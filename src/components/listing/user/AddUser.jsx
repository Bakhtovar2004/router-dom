import React from 'react'
import { useState } from 'react'

export default function AddUser({sortBy, setSortBy}) {


   const [img,setImg] = useState()
   const [name,setName] = useState()
   const [age,setAge] = useState()
   const [work,setWork] = useState()



    const addNewUser = (newUser) => {
        const addUser = {
            id: Math.random(),
            img,
            name,
            age,
            work ,
        }
        setSortBy([...sortBy, addUser]);
        setImg('')
        setName('')
        setAge('')
        setWork('')
    };

    return (
        <div className='addUser'>
            <input onChange={(e) => setImg(e.target.value)} value={img} type="text" placeholder='add img' />
            <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder='add  name' />
            <input onChange={(e) => setAge(e.target.value)} value={age} type="text" placeholder='add year' />
            <input onChange={(e) => setWork(e.target.value)} value={work} type="text" placeholder='add work' />
            <button onClick={addNewUser}>Добавить</button>

        </div>
    )
}
