import React from 'react'
import './Main.css'
export default function Main() {
  return (
    <div>

<div className="login">
  <h1>Login</h1>
 <div className='input'>
  <p>Username</p>
 <input className='input4' type='text' placeholder='Введите логин'></input>
 </div>
 <div className='input'>
 <p>Password</p>
  <input className='input4' type='password' placeholder='Введите пароль'></input>
 </div>
 <div className="login1">
 <a className='code' href="a">Forgot password?</a>
 </div>
 <div className="login2">
 <button>Login</button>
 </div>
 <a className='sing' href="sing">Sing up</a>
</div>


    </div>
  )
}
