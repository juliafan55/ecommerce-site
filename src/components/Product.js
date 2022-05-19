import React, { useEffect, useState } from "react";
import { useParams } from "react-router"
import { StarIcon } from "@heroicons/react/outline"

function Product(props) {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)

    const params = useParams()
    const productID = params.id
    const SINGLE_PRODUCT_URL = `https://fakestoreapi.com/products/${productID}`
    
    async function getProduct() {
        setLoading(true)
        const response = await fetch(SINGLE_PRODUCT_URL);
        const data = await response.json();
        setProduct(data)
        setLoading(false)
    }

    useEffect(() => {
        getProduct();
    }, [])

    function Loading() {
        return (
            <>
                <p className="text-center mt-20 text-4xl">Loading...</p>
            </>
        )
    }

    function addToCart(newItem) {
        let cart = JSON.parse(localStorage.getItem("cart"))
        
        cart.push(newItem)
        localStorage.setItem("cart", JSON.stringify(cart))
    }

    function ShowProduct() {
        return (
            <div className="min-w-screen min-h-screen bg-indigo-500 flex items-center p-5 lg:p-10 overflow-hidden relative">
            <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
                <div className="md:flex items-center -mx-10">
                    <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                        <div className="relative">
                            <img src={product.image} className="w-full relative z-10" alt={product.title}/>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-10">
                        <div className="mb-10">
                            <p className="font-bold uppercaseext-1xl mb-4">{product.category}</p>
                            <p className="font-bold text-3xl mb-4">{product.title}</p>
                            <p className="text-sm mb-4">{product.description}<a href="#" className="opacity-50 text-gray-900 hover:opacity-100 inline-block text-xs leading-none border-b border-gray-900">MORE</a></p>
                            <p className="text-sm flex">{product.rating && product.rating.rate} <StarIcon className="w-4" /> {product.rating && product.rating.count} reviews</p>
                        </div>
                        <div>
                            <div className="inline-block align-bottom mr-5">
                                <span className="text-2xl leading-none align-baseline">$</span>
                                <span className="font-bold text-5xl leading-none align-baseline">{product.price}</span>
                            </div>
                                <div className="inline-block align-bottom">
                                    <button className="bg-indigo-300 opacity-90 hover:opacity-100 text-indigo-500 hover:text-indigo-900 rounded-full px-10 py-2 font-semibold" onClick={() => addToCart(product)}> ADD TO CART</button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }

    return (
            <div>
            {loading ? <Loading /> : <ShowProduct />}
        </div>
    )
    
}

export default Product;