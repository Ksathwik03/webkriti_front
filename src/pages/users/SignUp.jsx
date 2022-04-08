import React, { useState } from "react";
import "../assets/styles/signup.css";
import SignUpImg from "../assets/img/SignUp.svg";
import axios from "axios";
import { api } from "../../Api/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from "react-router-dom";

export default function SignUp() {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const history = useHistory()

  const Register = async(e) => {
    e.preventDefault();
    setTimeout(() => {
      document.querySelector("#btn").classList.add("clickBtn");
    }, 0);
    setTimeout(() => {
      document.querySelector("#btn").classList.remove("clickBtn");
    }, 200);
    const body = {email: email,password:password}

    await axios.post(`${api}addprofile/`, body)
    .then((res) => {
      if(res.status === 201){
        toast("Success fully created account")
        history.push('/login')
      }
      else{
        toast("some error occured")
      }
    })
  }

  return (
    <>
      <div className="parent-box1">
        <div className="admin-box">
          <div className="page-img box-item">
            <img src={SignUpImg} alt="" />
          </div>
          <div className="login-page box-item">
            <div className="login-header">
              <div className="login-page-icon"></div>
             <a href="#/login"  className="login-header-text">Log in</a> 
            </div>
            <p className="login-text">SIGN UP</p>{" "}
            <form action={Register} className="login-form">
              <div className="email  login-page-div">
                <input type="email" required={true} name="Email" id="" 
                onChange = {(e) => {setemail(e.target.value)}}
                placeholder="Email" />
                <i class="fa fa-envelope-square"></i>
              </div>
              <div className="pass login-page-div">
                <input
                  type="password"
                  name="Password"
                  required={true}
                  id=""
                  placeholder="Password"
                  onChange = {(e) => {setpassword(e.target.value)}}
                />
                <i class="fa fa-lock"></i>
              </div>
              <button className="Login" onClick={Register} id="btn">
              Sign up
              </button>
            </form>
          </div>
        </div>
        <ToastContainer />

      </div>
    </>
  );
}