import React from 'react'
import './Login.css'
import logo from "../../asset/logo.png"

const Login = () => {
  return (
    <div className='login'>
      <img src={logo} className='login-logo' alt="" />
      <div className="login-form">
        <h1>Sign In</h1>
        <form>
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email' />
          <input type="text" placeholder='your name' />
          <button>Sign In </button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login