import React from "react"
import {useParams} from "react-router"
import Product from "./Product"

function Cart({ cart }) {

    let currentCart = JSON.parse(localStorage.getItem("cart"))
    
    return (
        <div>
            <h1>Cart</h1>
            <div>
                {currentCart.map((item) => {
                    return (
                        <div key={item.id}>
                        <img src={item.image} alt={item.title} />
                            <p>{item.title}</p>
                            <p>{item.price}</p>
                    </div>)
                })}
            </div>
        </div>
    )
}

export default Cart