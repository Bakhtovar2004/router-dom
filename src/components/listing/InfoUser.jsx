import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './InfoUser.css'

export default function Infouser({ users }) {



    const { id } = useParams()
    // let incoming = users.filter(el => el.id == id)[0]
    // console.log('user', incoming);
    const [incoming, setIncoming] = useState({})


    useEffect(() => {
        if (!users) return;
        setIncoming(users.find((user1) => {
            return user1.id == id
        }))
    }, [id])
    console.log('id', id);


    return (

        <div className='cardview'>
            <img src={incoming.img} alt="" />
            <h2>{incoming.name}</h2>
            <h3>{incoming.age} year old</h3>
            <h3>{incoming.work}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptatum adipisci a veniam odio quo tempore sapiente quas impedit, corrupti ipsa nulla sunt aspernatur sed, molestias aut alias. Libero, magni.</p>
            <Link to='/listing'>Назад</Link>
        </div>

    )
}



