import React from 'react'
import { useState} from 'react'
import NavBar from '../../components/navBarLogin/navBarLogin'
import InputBox from '../../components/inputBox/inputBox'
import SubmitBtn from '../../components/submitBtn/submitBtn'
import Button from '../../components/button/button'
import ErrorBox from '../../components/Error/error'
import style from '../Login/style.module.css'
import { Link, useNavigate } from 'react-router-dom'

export default function Login(props) {
  const [formData,setFormData] = useState({mail:"",password:""});
  const [err,setError] = useState("");
  const navigate = useNavigate();

  function handleChange(e)
  {
    const {name,value}= e.target;
    setFormData({...formData,[name]:value});
  }
  
  async function handleSubmit(e)
  {
    e.preventDefault();
    let response = await fetch("http://localhost:3000/login",{
      method:"post",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(formData),
      credentials:'include' 
    })
    let resp = await response.json();
    //console.log(resp);
    localStorage.setItem("user",JSON.stringify(resp));
    if(resp.status)
    {
      props.setIsLoggedIn(true);
      props.setRole(resp.role)
      setFormData({mail:"",password:""});
      navigate("/home");
      
    }
    else{
      setError(resp.err);
    }
    //console.log(formData);
    setFormData({mail:"",password:""});
    //console.log(formData);
  }
    
    return (
      <>
      <div className='NavBar'>
        <NavBar/>
      </div>
      <div className="container d-flex justify-content-center align-items-center" style={{paddingTop:'90px',marginBottom:'115px'}}>
        <div className={style.loginBox}>
          <ErrorBox error={err}/>
          <form onSubmit={handleSubmit}>
            <InputBox className="username my-2" handleChange={handleChange} inputTitle="Email:" inputType="email" placeHolder="abc123@gmail.com" inputName="mail" value={formData.mail}/>
            <InputBox className="password my-2" handleChange={handleChange} inputTitle="Password:" inputType="password" placeHolder="Password" inputName="password" value={formData.password}/>
            <div>
              <p>
                <a href="/forgetPass">Forgot Password?</a>
                </p>
            </div>
            <SubmitBtn className="btn btn-primary my-2" value="Login"/>
            <p className="txtpara my-1">Don't have an account?</p>
          </form>
          <Link to="/addUser">
            <Button className="btn btn-primary my-1" value="Sign Up"/>
          </Link>
        </div>
      </div>

    </>
  )
}
