import React from "react"

function Navigation() {
    return (
        <div className="navbar">
            <ul className="navbar">
            <li className="navItem"> <a className="navLink" href="/" alt="brand"> ATLANTIC </a></li>
            <li className="navItem"> <a className="navLink" href="/" alt="home"> Home </a></li>
            <li className="navItem"> <a className="navLink" href="/" alt="products"> Products </a></li>
            </ul>

            <div className="navButtons">
                <a className="navLogin" href="/" alt="login"> Login </a>
                <a className="navLogin" href="/" alt="register"> Register </a>
                <a className="navLogin" href="/" alt="cart"> Cart (0)</a>
            </div>
        </div>
    )

}

export default Navigation