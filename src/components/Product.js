import React, { useEffect, useState } from "react";
import {useParams} from "react-router"

function Product() {
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
                Loading...
            </>
        )
    }

    function ShowProduct() {
        return (
            <div>
                
            </div>
        )
    }



    return (
        <div>
            <div>
                {loading ? <Loading /> : <ShowProduct />}
            </div>
            <img src={product.image}/>
        </div>
    )
    
}

export default Product;