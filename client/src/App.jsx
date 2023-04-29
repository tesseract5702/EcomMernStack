import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Router,useNavigate } from "react-router-dom";
import Login from "./pages/Login/login"
import Signup from "./pages/Signup/signup"
import NavBar from './components/navBarLogin/navBarLogin';
import Home from './pages/Home/home'
import Cart from './pages/Cart/cart'
import Verify from './pages/Verify/verify';
import LoadingBar from 'react-top-loading-bar'
import Test from './pages/Test/test'
import axios from 'axios'
import RequireAuth from './components/RequireAuth';
import ProtectedRouteLogin from './components/ProtectedRouteLogin';


function App() {
  const [progress, setProgress] = useState(0);
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const [role,setRole] = useState('');
  const [flag,setFlag] = useState(0);

  useEffect(()=>{

    axios.get("http://localhost:3000/test",{withCredentials:true})
    .then((res)=>{
      console.log(res.data.role,"chala?");
      setRole(res.data.role);
      setFlag(1);
      setIsLoggedIn(true);
    })
    .catch((err,res)=>{
      console.log(err,"catch");
      setIsLoggedIn(err.response?.data?.verify);
      setFlag(1);
      setRole('');
    })
  },[isLoggedIn])


  return (
    <BrowserRouter>
    <LoadingBar
      height={2}
      color="#19E6E6"
      progress={progress} 
    />
      <Routes>
        <Route 
         exact
         path='/'
         element={
          <ProtectedRouteLogin flag={flag} isLoggedIn={isLoggedIn} userRole={role}>
            <Login setIsLoggedIn ={setIsLoggedIn} setRole = {setRole} />
          </ProtectedRouteLogin>
        }>
        </Route>
        <Route
         exact
         path='/addUser'
          element={
            <ProtectedRouteLogin flag={flag} isLoggedIn={isLoggedIn} userRole={role}>
              <Signup/>
            </ProtectedRouteLogin>
          }>
          </Route>
        <Route 
          exact 
          path="/home"
          element={
            <RequireAuth role="user" flag={flag} isLoggedIn={isLoggedIn} userRole={role}>
             <Home setProgress={setProgress}/>
            </RequireAuth>
            }>
        </Route>
        <Route
         exact
         path='/home/cart'
         element={
          <RequireAuth role="user" flag={flag} isLoggedIn={isLoggedIn} userRole={role}>
            <Cart/>
          </RequireAuth>
        }>
        </Route>
        <Route exact path="/verify" element={<Verify/>}/>
        <Route exact path='/test' element={<Test/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
