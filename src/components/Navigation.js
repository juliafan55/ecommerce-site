import React from "react"
import { Link } from "react-router-dom"

function Navigation() {
    return (
        <div className="navbar">
            <ul className="navbar">
            <li className="navItem"> <Link className="navLink" to="/" alt="brand"> ATLANTIC </Link></li>
            <li className="navItem"> <Link className="navLink" to="/" alt="home"> Home </Link></li>
            <li className="navItem"> <Link className="navLink" to="/products" alt="products"> Products </Link></li>
            </ul>

            <div className="navButtons">
                <Link className="navLogin" to="/login" alt="login"> Login </Link>
                <Link className="navLogin" to="/register" alt="register"> Register </Link>
                <Link className="navLogin" to="/cart" alt="cart"> Cart (0)</Link>
            </div>
        </div>
    )

}

export default Navigation