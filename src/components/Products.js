import React, {useState, useEffect} from "react"

function Products() {
    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState(products);
    const [loading, setLoading] = useState (false)

    const ALL_PRODUCTS_URL = "https://fakestoreapi.com/products"

    async function getProducts() {
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

    function ShowProducts() {
        return (
        <div className="products-buttons">
            <button className="show-products-button">All</button>
            <button className="show-products-button">Women's Clothing</button>
            <button className="show-products-button">Men's Clothing</button>
            <button className="show-products-button">All</button>
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