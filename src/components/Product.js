import React, { useEffect, useState } from "react";
import { useParams } from "react-router"
import { Link } from "react-router-dom"

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

    //gave me an cors error????
    // useEffect(() => {
    //     const getProduct = async () => {
    //         setLoading(true)
    //         const SINGLE_PRODUCT_URL = `https://fakestoreapi.com/products/${productID}`
    //         const response = await fetch(SINGLE_PRODUCT_URL);
    //         const data = await response.json();
    //         setProduct(data)
    //         setLoading(false)
    //     }
    //     getProduct()
    // })

    function Loading() {
        return (
            <>
                Loading...
            </>
        )
    }

    function ShowProduct() {
        return (
            <div>
                <div>
                    <img src={product.image} alt={product.title} />
                </div>
                <div>
                    <p>{product.category}</p>
                    <p>{product.title}</p>
                    <p>Rating: {product.rating && product.rating.rate} {product.rating && product.rating.count} </p>
                    <p> ${product.price}</p>
                </div>
                <div>
                    <p>
                        {product.description}
                    </p>
                </div>
                <button>Add to cart</button>
                <Link to="/cart">Go to cart</Link>

            </div>
        )
    }

    return (
        <div>
            <div>
                {loading ? <Loading /> : <ShowProduct />}
            </div>
        </div>
    )
    
}

export default Product;