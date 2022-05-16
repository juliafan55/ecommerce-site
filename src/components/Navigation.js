import React from "react"
import { Link } from "react-router-dom"
// import "../styles/navigation.scss"

function Navigation() {
    return (
        <div className="navbar">
            <div className="logo-container">
                <Link to="/" alt="brand" className="logo"> ATLANTIC </Link>
            </div>
        
            <div className="nav-container">
                <div className="nav-products">
                    <Link to="/" alt="home" className="nav-item"> Home </Link>
                    <Link to="/products" alt="products" className="nav-item"> Products </Link>
                </div>

                <div className="nav-controls">
                    <Link className="nav-login" to="/login" alt="login"> Login </Link>
                    <Link className="nav-login" to="/register" alt="register"> Register </Link>
                    <Link className="nav-login" to="/cart" alt="cart"> Cart (0)</Link>
                </div>
            </div>
        </div>

    )

}

export default Navigation