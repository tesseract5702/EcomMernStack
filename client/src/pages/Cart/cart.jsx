import React from 'react'
import { useEffect,useState } from 'react';
import NavBar from '../../components/navBar/navBar'
import Card from '../../components/Cards/card'

export default function cart(props) {
  const [products,setProducts]=useState([]);
  const [loading,setLoading]=useState(true);
  const [msg,setMessage] = useState("");
  const [showAlert,setShowAlert] = useState(false);
  const [status,setStatus] = useState(404);
  const userName = JSON.parse(localStorage.getItem("user"));

  const getProd = async()=>{
    props.setProgress(10);
    let response = await fetch("http://localhost:3000/openCart",{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(userName)
    })
    props.setProgress(30);
    let result = await response.json();
    props.setProgress(70);
    delete result.status;
    setProducts(result.products);
    setLoading(false);
    props.setProgress(100);
  }

  useEffect(()=>{
    getProd();
  },[])

  function setTime()
  {
    setTimeout(()=>{
      setMessage("");
      setShowAlert(false);
    },3000)
  }

  return (
    <>
    <div className='NavBar'>
      <NavBar userName={userName.name}/>
    </div>
    <h1>Cart</h1>
    <p>Cart body</p>
    </>
  )
}
