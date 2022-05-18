import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Search from "./Search"

function Products() {
    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState(products);
    const [loading, setLoading] = useState(false)
    // const [search, setSearch] = useState()

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
            
            <div className="container px-6 py-8 mx-auto">
                <div className="bg-white text-slate-900 m-2 p-2 rounded-xl flex justify-center">
   
                    <Search searchText={(text) => setFilter(text)}/>
  
                </div>
                <div className="bg-white text-slate-900`https://fakestoreapi.com/products/${productID}` rounded-xl flex justify-center">
                    <button className="uppercase px-3 py-1 m-2 bg-indigo-200 text-indigo-900 rounded-2xl text-sm" onClick={() => setFilter(products)}>Shop All</button>
                    <button className="uppercase px-3 py-1 m-2 bg-indigo-200 text-indigo-900 rounded-2xl text-sm" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
                    <button className="uppercase px-3 py-1 m-2 bg-indigo-200 text-indigo-900 rounded-2xl text-sm" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
                    <button className="uppercase px-3 py-1 m-2 bg-indigo-200 text-indigo-900 rounded-2xl text-sm" onClick={() => filterProduct("jewelery")}>Jewerely</button>
                    <button className="uppercase px-3 py-1 m-2 bg-indigo-200 text-indigo-900 rounded-2xl text-sm" onClick={() => filterProduct("electronics")}>Electronics</button>
                </div>

                <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {filter.map((product) => {
                        return (
                            <Link to={`/products/${product.id}`}>
                                <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto border rounded-lg p-4 transition ease-out delay 150 hover:-translate-y-1 hover:scale-110 duration-300">
                                    <img className="object-cover w-full"src={product.image} alt={product.title} />
                                    <p className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200"> {product.title.substring(0, 12)}</p>
                                    <p className="text-indigo-500"> ${product.price}</p>
                                </div>
                            </Link>
                        )
                    })}
                </div>
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