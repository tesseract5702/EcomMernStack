import React from 'react'
import style from "./style.module.css"
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function NavBar(props) {
    const history = useNavigate();
//     let bgImage = {
//         backgroundImage: url("https://cdn.kekastatic.net/shared/assets/images/components/page-header/2.png")
//     }
//     let compNameStyle = {
//         color:'azure',
//     }
//     let navItemStyle = {
//         paddingRight : '20px',
//     }
//     let dropdownMenuStyle = {
//         fontSize: '20px',
//         position: 'absolute',
//     }
//     let cartDivStyle = {
//         padding: '5px 18px 2px 5px',
//     }
//   return (
//     <>
//         <nav className="navbar navbar-expand-lg bg-dark d-flex fixed-top" style={bgImage}>
//             <div className="container-fluid d-flex flex-nowrap">
//             <a className="navbar-brand compName" style={compNameStyle} href="/">Come Shop</a>
//                 <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavDropdown">
//                     <ul className="navbar-nav d-flex">
//                     <li className="nav-item dropdown d-flex" style={navItemStyle}>
//                         <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={compNameStyle}>
//                         Username
//                         </a>
//                         <ul className="dropdown-menu" style={dropdownMenuStyle}>
//                         <li><a className="dropdown-item" href="/orders">My Orders</a></li>
//                         <li><a className="dropdown-item" href="/resetPass">Change Password</a></li>
//                         <li><a className="dropdown-item" href="/logout">Log Out</a></li>
//                         </ul>
//                     </li>
//                     </ul>
//                     <li className="d-flex">
//                         <div className='divCart' style={cartDivStyle}>
//                             <a href="/openCart" className='anchorCart'>
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
//                                 <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
//                                 </svg>
//                             </a>
//                         </div>
//                     </li>
//                 </div>
//             </div>
//         </nav>
//     </>
//   )

return(
    <>
        <nav
        className="navbar navbar-expand-lg bg-dark d-flex fixed-top"
        style={{
        backgroundImage:
            'url("https://cdn.kekastatic.net/shared/assets/images/components/page-header/2.png")'
        }}
        >
        <div className="container-fluid d-flex flex-nowrap">
        <Link className="navbar-brand" to="/home" style={{ color: "azure" }}>
            Come Shop
        </Link>
        <div
            className="collapse navbar-collapse d-flex justify-content-end"
            id="navbarNavDropdown"
        >
            <ul className="navbar-nav d-flex">
            <li className="nav-item dropdown d-flex" style={{ paddingRight: 10 }}>
                <a
                className="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: "azure" }}
                >
                {props.userName}
                </a>
                <ul
                className="dropdown-menu"
                style={{ fontSize: 20, position: "absolute" }}
                >
                <li>
                    <a className="dropdown-item" href="/orders">
                    My Orders
                    </a>
                </li>
                <li>
                    <a className="dropdown-item" href="/resetPass">
                    Change Password
                    </a>
                </li>
                <li>
                    <a className="dropdown-item" onClick={()=>{
                        axios.get("http://localhost:3000/logout",{withCredentials:true})
                        .then((res)=>{
                            console.log("logoutthen");
                            history("/")})
                        .catch((err)=>{
                            console.log("logoutCatch");
                        })
                    }}>
                    Log Out
                    </a>
                </li>
                </ul>
            </li>
            </ul>
            <li className="d-flex">
            <div style={{ padding: "5px 28px 2px 5px" }}>
                <Link to="/home/cart" style={{ color: "azure" }}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={23}
                    height={23}
                    fill="currentColor"
                    className="bi bi-cart"
                    viewBox="0 0 16 16"
                >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
                </Link>
            </div>
            </li>
        </div>
        </div>
    </nav>
  
    </>
)
}
