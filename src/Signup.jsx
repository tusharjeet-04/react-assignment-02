import React from 'react'
import './Signup.css'

const Signup = () => {
    return (
        <>
            <div className="login-main">
                <h2>Signup</h2>
                <div className="form1">
                    <input className="email" type="text" placeholder="Email"></input>
                    <input className="email" type="password" placeholder="Create Password"></input>
                    <input className="email" type="password" placeholder="Confirm Password"></input>
                </div>
                <button className="forget" type="submit">Forgot password?</button>
                <button className="button" type="submit"><span className="login">Signup</span></button>
                <div className="Signup">
                    <p className='text'>Already have an account?<span><button className="sign" type="submit">Signup</button></span></p>
                </div>
                <h3>---------------------Or-----------------------</h3>
                <div className='facebook'>
                    <div className="facebookimg"></div>
                    <button className="facebooktext" type="submit">Login with facebook</button>
                </div>
                <div className='google'>
                    <div className="googleimg"></div>
                    <button className="googletext" type="submit">Login with google</button>
                </div>
            </div>
        </>
    )
}

export default Signup