import React from 'react'
import '../assets/styles/navbar.css'
import logo from '../assets/img/logo1.svg'
import { useState } from 'react'
import { useEffect } from 'react';

export default function Navbar({match}) {
    const [token, setToken] = useState('');
    const [username, setusername] = useState('')
    
    useEffect(() => {
    setToken(localStorage.getItem(`token`));
    setusername(localStorage.getItem(`username`))
    console.log(match)
    })

    const logout = ()=>{
    localStorage.removeItem(`token`);
    localStorage.removeItem('email')
    setToken(localStorage.getItem(`token`));
    localStorage.removeItem('admin')
    }

    return (
        <>
            <div className="navbar">
                <div className="logo"><img src={logo} alt="" /><h1></h1></div>
                <ul>
                    <li className="nav_items"><a href="#/"> Home</a></li>
                    {<li className="nav_items"><a href={`#/${username}/dashboard`}>Dashboard</a> </li>}
                    {!(token)&&<li className="nav_items"><a href="#/login"> Log in</a></li>}
                    {!(token)&&<li className="nav_items"><a href="#/signup">Sign up</a> </li>}
                    {token&&<li className="nav_items"><a href="#/" onClick={logout}>Log out</a> </li>}
                    
                </ul>
            </div>
        </>
    )
}
