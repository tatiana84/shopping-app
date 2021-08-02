import React from 'react';

const Cart = (props) => {
    const {cart, onAdd, onRemove} = props;
    const totalPrice = cart.reduce((a, c) => a + c.price * c.qty, 0);
    return (
        <aside className="cart col-1">
            <h2>Cart Items</h2>
            <div>
                {cart.length === 0 && <div>Cart Is Empty</div>}
            </div>
            {cart.map((item) => (
                <div key={item.id} className="row">
                    <div className="col-2">
                        <img className="imgCart" src={item.image} alt={item.title}/>
                        <h3>{item.title}</h3>
                    </div>
                    <div className="col-2">
                        <button onClick={()=>onAdd(item)} className="add">+</button>
                        <button onClick={()=>onRemove(item)} className="remove">-</button>
                    </div>
                    <div className="col-2 text-right">
                        {item.qty} x ${item.price.toFixed(2)}
                    </div>
                </div>
            ))}
            {cart.length !== 0 && (
                <>
                    <hr></hr>
                    <div className="row">
                        <div className="col-2">
                            <strong>Total Price</strong>
                        </div>
                        <div className="col-1 text-right">
                            <strong>${totalPrice.toFixed(2)}</strong>
                        </div>
                    </div>
                </>
            )}
        </aside>
    )
}
export default Cart;