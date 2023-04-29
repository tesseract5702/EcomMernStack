import React from 'react'
import style from '../Verify/style.module.css'

export default function verify() {
  return (
    <>
    <div className="container-fluid justify-content-center">
        <div className="text container-fluid" style={{ margin: "auto" }}>
        <h1 className='text-center'>Please verify your email first.</h1>
        </div>
        <div className="googleMailIcon container d-flex justify-content-center">
        <a href="https://mail.google.com">
            <img
            className={style.icon}
            src="https://cdn-icons-png.flaticon.com/512/281/281769.png"
            alt="Gmail Icon"
            />
        </a>
        </div>
    </div>
  
    </>
  )
}
