import React from 'react'

// Import Image
import loginImage from '../icons/login.png'

// Import Css File
import './Login.css'

function Login() {
  return (
    <div className='loginContainer'>
      <h1>Login / Register</h1>
      <div className="log">
        <div className="login">
            <input type="text" name="userName" id="in" placeholder='User Name'/>
            <br />
            <input type="text" name="userPassword" id="in"  placeholder='Password'/>
            <br/>
            <button>Login</button>
        </div>
        <div className="loginImage">
            <img src={loginImage} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Login
