import React from 'react';
import { IoIosCart } from 'react-icons/io';
import { ImHome } from 'react-icons/im';

const Header = (props) => {
    //const { cart } = props;
    
    return (
        <>
            <header className="App-header">
                <button className='home-btn'><ImHome /></button>
                <button className='cart-btn'><IoIosCart/>{props.countItemCart}</button>
            </header>
        </>
    )
}

export default Header;