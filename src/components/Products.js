import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function Products() {
    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState(products);
    const [loading, setLoading] = useState (false)

    const ALL_PRODUCTS_URL = "https://fakestoreapi.com/products"

    async function getProducts() {
        setLoading(true)
        const response = await fetch(ALL_PRODUCTS_URL);
        const data = await response.json();
        // console.log(data)
        // console.log(filter)
        setProducts(data)
        setFilter(data)
        setLoading(false)
    }

    useEffect(() => {
        getProducts();
    }, [])

    function Loading() {
        return (
            <>
                Loading...
            </>
        )
    }

    function filterProduct(category) {
        const filteredList = products.filter((cat) => cat.category === category);
        setFilter(filteredList);
    }

    function ShowProducts() {
        return (
            <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-wxl flex justify-center">
                <button className="uppercase px-3 py-1 m-2 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">Shop All</button>
                <button className="uppercase px-3 py-1 m-2 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">Women's Clothing</button>
                <button className="uppercase px-3 py-1 m-2 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">Men's Clothing</button>
                <button className="uppercase px-3 py-1 m-2 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">Jewerely</button>
                <button className="uppercase px-3 py-1 m-2 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">Electronics</button>
                
            </div>
        )
    }

    return (
            <div className="show-products">
                {loading ? <Loading /> : <ShowProducts />}
            </div>
    )
    
}

export default Products