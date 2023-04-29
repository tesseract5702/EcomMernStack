import React from 'react'
import { useState } from 'react'
import NavBar from '../../components/navBarLogin/navBarLogin'
import InputBox from '../../components/inputBox/inputBox'
import SubmitBtn from '../../components/submitBtn/submitBtn'
import Button from '../../components/button/button'
import ErrorBox from '../../components/Error/error'
import style from '../Signup/style.module.css'
import { Link, useNavigate } from 'react-router-dom'

export default function signup() {
  const [formData,setFormData] = useState({username:"",mail:"",password:"",role:""});
  const [err,setError] = useState("");
  const [msg,setMsg] = useState("");
  const navigate = useNavigate();

  function handleChange(e)
  {
    const {name,value}= e.target;
    setFormData({...formData,[name]:value});
  }
  
  async function handleSubmit(e)
  {
    e.preventDefault();
    let response = await fetch("http://localhost:3000/addUser",{
      method:"post",
      withCredentials:true,
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(formData) 
    })
    let resp = await response.json();
    //console.log(resp);
    localStorage.setItem("user",JSON.stringify(resp));
    if(resp.status)
    {
      setMsg(resp.msg);
      setFormData({username:"",mail:"",password:"",role:""});
      navigate("/verify");
    }
    else
    {
        setError(resp.err);
    }
    
    //console.log(formData);
  }
  return (
    <>
    <div className='NavBar'>
      <NavBar/>
    </div>
    <div className="container d-flex justify-content-center align-items-center" style={{paddingTop:'90px'}}>
        <div className={style.loginBox}>
            <ErrorBox error={err}/>
            <form onSubmit={handleSubmit}>
                <InputBox className="username my-2" handleChange={handleChange} inputTitle="Full Name:" inputType="text" placeHolder="Full Name" inputName="username"/>
                <InputBox className="mailid my-2" handleChange={handleChange} inputTitle="Email:" inputType="email" placeHolder="abc123@gmail.com" inputName="mail"/>
                <InputBox className="password my-2" handleChange={handleChange} inputTitle="Password:" inputType="password" placeHolder="Password" inputName="password"/>
            <div className="role d-flex justify-content-between" style={{padding:'15px 30px 10px 30px'}}>
                <div className="form-check">
                <input
                    className="form-check-input"
                    type="radio"
                    name="role"
                    id="flexRadioDefault1"
                    value="user"
                    defaultChecked=""
                    onClick={handleChange}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                    <h5>User</h5>
                </label>
                </div>
                <div className="form-check">
                <input
                    className="form-check-input"
                    type="radio"
                    name="role"
                    id="flexRadioDefault2"
                    value="seller"
                    onClick={handleChange}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                    <h5>Seller</h5>
                </label>
                </div>
            </div>
            <div className="submitBtn d-grid gap-2">
                <SubmitBtn className="btn btn-primary my-2" value="Sign Up"/>
            </div>
            <p className="txtpara">Already have an account?</p>
            </form>
            <Link to="/">
            <div className="signUplink d-grid gap-2">
                <Button className="btn btn-primary" value="Login"/>
            </div>
            </Link>
        </div>
    </div>
    </>
  )
}
