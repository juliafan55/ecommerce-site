import React, {useState} from "react"
import { Link } from "react-router-dom"
import { MenuIcon, XIcon } from "@heroicons/react/outline"


function Navigation() {
    const [nav, setNav] = useState(false)

    function handleClick() {
        setNav(!nav)
    }

    return (
        <div className=" h-[80px] bg-zinc-100 drop-shadow-lg">
            <div className="flex justify-between items-center w-full h-full">
                <div className="flex items-center">
                    <Link to="/"><h1 className="text-3xl font-bold m-4 sm:text-4xl text-indigo-500">ATLANTIC</h1></Link>
                    <ul className="hidden md:flex">
                        <Link to="/"><li className="hover:underline underline-offset-2">Home</li></Link>
                        <Link to="/products"><li className="hover:underline underline-offset-2">Products</li></Link>
                    </ul>
                </div>
                <div>
                </div>

                <div>
                    <div className="hidden md:flex pr-4">
                        <button className="border-none bg-transparent text-black mr-4">Sign In</button>
                        <button className="px-4 mr-4">Sign Up</button>
                        <Link to="/cart"><button className="px-4 mr-4">Cart(0)</button></Link>
                    </div>
                    <div className="md:hidden" onClick={handleClick}>
                        {!nav ? <MenuIcon className="w-5"> </MenuIcon> : <XIcon className="w-5"/>}
                        
                    </div>
                </div>
            </div>
            <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
                <Link to="/"><li className="border-b-2 border-zinc-300 w-full">Home</li></Link>
                <Link to="products"><li className="border-b-2 border-zinc-300 w-full">Products</li></Link>
                <div className="flex flex-col my-4">
                    <button className="bg-transparent text-indigo-500 px-4 py-2 mb-4">Sign In</button>
                    <button className="px-4 py-2 mb-4 rounded-2xl">Sign Up</button>
                    <Link to="/cart"><button className="px-4 py-2 mb-4 rounded-2xl">Cart(0)</button></Link>
                </div>
            </ul>

        </div>

    )

}

export default Navigation
    