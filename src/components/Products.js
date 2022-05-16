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

    function filterProduct(category) {
        const filteredList = products.filter((cat) => cat.category === category);
        setFilter(filteredList);
    }

    function ShowProducts() {
        return (
        <div>
        <div className="products-buttons">
            <button className="show-products-button" onClick={()=>setFilter(products)}>All</button>
            <button className="show-products-button" onClick={()=>filterProduct("women's clothing")}>Women's Clothing</button>
            <button className="show-products-button" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
            <button className="show-products-button" onClick={() => filterProduct("jewelery")}>Jewerely</button>
            <button className="show-products-button" onClick={() => filterProduct("electronics")}>Electronics</button>
        </div>
                
        {filter.map((product) => {
            return (
                <div className="all-products-cards">    
                    <div className="product-card" key={product.id}>
                        <img src={product.image} alt={product.title} className="card-image" />
                            <div className="card-body">
                                <span className="card-title">{product.title.substring(0,12)}</span>
                            <span className="product-price"> ${product.price}</span>
                            <a href="/" alt="buy now"> Buy Now </a>
                            </div>
                    </div>
                </div>
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