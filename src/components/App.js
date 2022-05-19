import '../styles/App.css';
//components
import Navigation from './Navigation';
import Home from './Home';
import Products from './Products';
import Product from './Product';
import Cart from './Cart';

//dependencies
import { useState } from 'react';
import { Route, Routes } from "react-router-dom"

function App() {
  localStorage.setItem("cart", JSON.stringify([]))

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
