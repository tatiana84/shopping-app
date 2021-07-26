import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import Products from './components/products';
import Product from './components/product';

function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (item) => {
    //console.log('I am in addToCart');
    setCart([...cart, item]);
  }

  return (
    <div className="App">
      <Header countItemCart={cart.length}/>
      <Products/>
      <Product addToCart={addToCart}/>
    </div>
  );
}

export default App;