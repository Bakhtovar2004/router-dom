import React from 'react'
import Header1 from './Header1'
import Users from './user/Users'


export default function Listing({users}) {
    
  return (
    <div>
       <Header1 />
      <Users users={users}/>

    </div>
  )
}
