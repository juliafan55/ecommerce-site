import React from "react"

function Cart({cart, setCart}) {

    console.log("cart props", cart)
    console.log("setcart props", setCart)

    const getTotalSum = () => {
        return cart.reduce(
          (sum, { cost, quantity }) => sum + cost * quantity,
          0
        );
      };

    const clearCart = () => {
        setCart([]);
      };

    const setQuantity = (product, amount) => {
        const newCart = [...cart];
        newCart.find(
          (item) => item.title === product.title
        ).quantity = amount;
        setCart(newCart);
      };
    
      const removeFromCart = (productToRemove) => {
        setCart(
          cart.filter((product) => product !== productToRemove)
        );
      };
    
    return (
        <>
            <h1>Cart</h1>
      </>
    )
}

export default Cart