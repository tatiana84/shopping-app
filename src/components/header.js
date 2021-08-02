import React from 'react';
import { IoIosCart } from 'react-icons/io';
import { ImHome } from 'react-icons/im';
import { Link } from 'react-router-dom';

const stylesIcons = {color: 'white'};
const Header = (props) => {
    
    return (
        <>
            <header className="row block center">
                <div className='home'>
                    <Link to="/">
                        <ImHome style={stylesIcons}/>
                    </Link>
                </div>
                <div className='cart'>
                    <Link to="/cart"> 
                        <IoIosCart style={stylesIcons}/>
                        { " " }
                        {props.countItemCart? (
                            <button className="badge">{props.countItemCart}</button>
                        ) : (
                            ''
                        )}
                    </Link>
                </div>
            </header>
        </>
    )
}

export default Header;