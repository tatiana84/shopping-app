//import React, { useState } from 'react';

const Product = ({item, addToCart}) => {
    /*const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        //console.log('I am in addToCart');
        setCart([...cart, item]);
    }*/
    return (
        <div className="container">
            <div className="product"> 
                <img src={item.image} alt={item.title}/>
                <h3>{item.title}</h3>
                <h4>Created by: {item.author}</h4>
                <h4>{item.price}</h4>
                <button className="add-btn" onClick ={() => addToCart(item)} >Add to Cart</button>              
            </div>
        </div>
    )
}
export default Product;