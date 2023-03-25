import React, { useState } from 'react'
import { LoggedIn } from './LoggedIn';
import './Styles.css'

export const LoginPage = () => {
    const [loggedIn, setLoggedIn] = useState(false)
        ;
    const [username, setUsername] = useState("")
    const handleUsername = (e) => {
        setUsername(e.target.value)
        console.log(username);
    }

    const [password, setPass] = useState('')
    const handlePassword = (e) => {
        setPass(e.target.value);
        console.log(password);
    }

    const [redUser, setRedUSer] = useState(false)
    const [redPass, setRedPass] = useState(false)
    const handleLogin = () => {
        if (username.length < 1 && password.length < 1) {
            setRedUSer(true);
            setRedPass(true)
        } else if (username.length < 1) {
            setRedUSer(true)
            setRedPass(false)
        } else if (password.length < 1) {
            setRedPass(true)
            setRedUSer(false)
        } else {
            setRedPass(false)
            setRedUSer(false)
            setLoggedIn(true)
            console.log("LOGIN SUCESSFUL");
        }
    }

    if (loggedIn) {
        return (
            <div>
                <LoggedIn />
            </div>
        )
    }
    else {
        return (
            <div className='login' >
                <div className="overview">
                    <h2 className='sign-up' >CREATE NEW ACCOUNT</h2>
                    <div className='moto' >
                        <h3 > Doctor Yourself </h3>
                        <p>Your body is speaking,Are you listening?</p>
                    </div>
                    <div>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos ipsa labore dolor similique beatae placeat non deserunt, velit quo voluptatum ducimus facere officia aliquam corrupti reiciendis, quibusdam veritatis iusto voluptates!
                        </p>
                    </div>
                </div>
                <div className='creds' >
                    <h1>SIGN UP</h1>
                    <input type="text" value={username} onChange={handleUsername} placeholder='Email' style={redUser ? { border: 'red 2px solid' } : null} />
                    <span style={!redUser ? { display: 'block', color: 'transparent', fontSize: 10 } : { display: 'block', color: 'red', fontSize: 10 }} > Please enter your username </span>
                    <input type="password" value={password} onChange={handlePassword} placeholder='Password' style={redPass ? { border: 'red 2px solid' } : null} />
                    <span style={!redPass ? { display: 'block', color: 'transparent', fontSize: 10 } : { display: 'block', color: 'red', fontSize: 10 }} > Please enter your password </span>
                    <button onClick={handleLogin} className="loginBtn"  > Sign Up </button>
                </div>

            </div>
        )
    }
}
