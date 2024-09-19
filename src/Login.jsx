import React from 'react'
import './Login.css'

const Login = () => {
    return (
        <>
        
            <div className="login-main">
                <h2>Login</h2>
                <div className="form">
                    <input className="Email"type="text" placeholder="Email"></input>
                    <input className="Email"type="password" placeholder="Password"></input>
                </div>
                <button className="forget" type="submit">Forgot password?</button>
                <button className="button" type="submit"><span className="login">Login</span></button>
                <div className="Signup">
                    <p className='text'>Don't have an account?<span><button className="sign"type="submit">Signup</button></span></p>
                </div>
                <h3>--------------------- Or ----------------------</h3>
                <div className='facebook'>
                <div className="facebookimg"></div>   
                <button className="facebooktext"type="submit">Login with facebook</button>
                </div>
                <div className='google'>
                <div className="googleimg"></div>   
                <button className="googletext"type="submit">Login with google</button>
                </div>   
            </div>
    
        </>
    )

}

export default Login