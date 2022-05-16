import '../styles/App.css';
//components
import Navigation from './Navigation';
import Home from './Home';
import Products from './Products';
import Product from './Product';

//dependencies
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
