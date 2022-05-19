import React from "react"
import {useParams} from "react-router"
import Product from "./Product"

function Cart() {

    let currentCart = JSON.parse(localStorage.getItem("cart"))
    
    return (
        <div className="flex flex-col">
            <div className="text-3xl text-center p-4">
                <p>Your Cart Below</p>
            </div>
            <div>
                <div>
                    {currentCart.map((item) => {
                        return (
                            <div key={item.id}>
                                <div className="md:flex inline-flex items-center -mx-10">
                                    <img src={item.image} alt={item.title} className=" object-scale-down h-48 w-96 py-4" />
                                    <div className="flex-col">
                                    <p className="text-center">{item.title}</p>
                                        <p> ${item.price}</p>
                                    </div>
                                </div>
                            </div>)
                    })}
                    </div>
                </div>
        </div>
    )
}

export default Cart