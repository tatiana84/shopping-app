import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Header from './components/header';
import Products from './components/products';
import Cart from './components/cart';

function App() {
  const [cart, setCart] = useState([]);
  /*const addToCart = (item) => {
    //console.log('I am in addToCart');
    setCart([...cart, item]);
  }*/
  const onAdd = (item) => {
    const exist = cart.find((x) => x.id === item.id);
    if (exist) {
      setCart(
        cart.map((x) =>
        x.id === item.id ? { ...exist, qty: exist.qty + 1} : x)
      );
    } else {
      setCart([...cart, {...item, qty: 1}])
    }
  };

  const onRemove = (item) => {
    const exist = cart.find((x) => x.id === item.id);
    if (exist.qty === 1) {
      setCart(cart.filter((x) => x.id !== item.id));
    } else {
      setCart(
        cart.map((x) =>
        x.id === item.id ? { ...exist, qty: exist.qty - 1 } : x)
      );
    }
  };

  return (
    <Router>
      <div className="App">
        <Header countItemCart={cart.length}/>
        <Switch>
          <Route path="/" exact render={() => <Products/>}>
          <div>
            <Products onAdd={onAdd}/>
          </div>
          </Route>
          
          <Route path="/cart" exact render={() => <Cart/>}>
            <div>
              <Cart cart={cart} onAdd={onAdd} onRemove={onRemove}/>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;