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
        <div>
        <div className="products-buttons">
            <button className="show-products-button" onClick={() => setFilter(products)}>All</button>
            <button className="show-products-button" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
            <button className="show-products-button" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
            <button className="show-products-button" onClick={() => filterProduct("jewelery")}>Jewerely</button>
            <button className="show-products-button" onClick={() => filterProduct("electronics")}>Electronics</button>
        </div>
                
        {filter.map((product) => {
            return (
                <Link to={`/products/${product.id}`}>
                    <span className="card" style={{ "display": "block" }}>
                         <div className="product-card">
                         <img src={product.image} alt={product.title} className="card-image" />
                             <div className="card-body">
                                 <span className="card-title">{product.title.substring(0,12)}</span>
                             <span className="product-price"> ${product.price}</span>
                                <Link to={`/products/${product.id}`} alt="buy now"> Buy Now </Link>
                             </div>
                        </div>
                    </span>
                </Link>
                )
            })}
        </div>  
        )
    }

    return (
        <div>
            <div className="products-container">
                <span>NEW ARRIVALS</span>
            </div>
            <div className="show-products">
                {loading ? <Loading /> : <ShowProducts />}
            </div>
        </div>
    )
    
}

export default Products