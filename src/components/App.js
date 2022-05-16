import '../styles/App.scss';

//components
import Navigation from './Navigation';
import Home from './Home';
import Products from './Products';

//dependencies
import { Route, Routes } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <h1> Logo </h1>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={ <Products />} />
      </Routes>
    </div>
  );
}

export default App;
