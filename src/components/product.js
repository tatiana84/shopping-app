//import React, { useState } from 'react';

const Product = ({item, onAdd}) => {
    return (
        <div className="container">
            <div className="product"> 
                <img src={item.image} alt={item.title}/>
                <h3>{item.title}</h3>
                <h4>Created by: <i>{item.author}</i></h4>
                <h4>${item.price}</h4>
                <button className="add-btn" onClick ={() =>onAdd(item)} >Buy</button>              
            </div>
        </div>
    )
}
export default Product;