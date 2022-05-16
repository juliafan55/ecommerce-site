import React from "react"
import { Link } from "react-router-dom"
// import "../styles/navigation.scss"

function Navigation() {
    return (
        <div className="w-screen h-[80px] z-10 bg-zinc-100 drop-shadow-lg">
            <div className="px-2 flex justify-between items-center w-full h-full">
                <div className="flex items-center">
                    <Link to="/"><h1 className="text-3xl font-bold mr-4 sm:text-4xl">ATLANTIC</h1></Link>
                    <ul className="hidden md:flex">
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/products"><li>Products</li></Link>
                    </ul>
                </div>
                <div>
                    <div className="hidden md:flex pr-4">
                        <button className="border-none bg-transparent text-black mr-4">Sign In</button>
                        <button className="px-4 mr-4">Sign Up</button>
                        <button className="px-4 mr-4">Cart(0)</button>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default Navigation
    