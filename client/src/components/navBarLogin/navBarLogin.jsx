import React from 'react'
import { Link } from 'react-router-dom'

export default function navBarLogin() {
  return (
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
            </div>
    </nav>
  )
}
