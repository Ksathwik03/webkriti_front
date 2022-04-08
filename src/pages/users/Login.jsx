import React, { useState } from "react";
import "../assets/styles/login.css";
import loginImg from "../assets/img/login-img.svg";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { api } from "../../Api/api";
import {useHistory} from 'react-router-dom'

function Admin() {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  
  const history = useHistory()
  const Login = async(e) => {
    e.preventDefault()

    const body = {
      email: email,
      password: password
    }

    await axios.post(`${api}/login`, body)
    .then((res) => {
      console.log(res.data)
      if(res.status === 200){
        toast("Successfull logged in")
        if(email === "admin"){
          localStorage.setItem("admin",true)
        }
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("email", email)
        localStorage.setItem("id", res.data._id)
        history.push(`/`)
      }
      else{
        toast(`${res.data.error}`)
      }
    })
  }
  return (
    <>
      <div className="parent-box">
        <div className="admin-box">
          <div className="page-img box-item">
            <img src={loginImg} alt="" />
          </div>
          <div className="login-page box-item">
              <div className="login-header">
                  <div className="login-page-icon">

                  </div>
              </div>
              <p className="login-text">SIGN IN</p> <span className="Inner-text">Sign in to continue</span>
            <form action={Login} className="login-form">

              <div className="email  login-page-div">
                <input type="Text" name="email" id="" 
                onChange = {(e) => setemail(e.target.value)}
                placeholder="email"/>
              <i className="fa fa-user"></i>
              </div>
              <div className="pass login-page-div">
                <input type="password" name="Password" id=""
                onChange = {(e) => setpassword(e.target.value)}
                placeholder="Password" />
                <i className="fa fa-lock"></i>
              </div>
              <button className="Login" onClick={Login} id="btn">Log in</button>
            </form>
             <p className="login-footer">Don’t have an account?<a href="#/signUp">Sign up</a> </p>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default Admin;