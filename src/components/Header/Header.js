import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
           <h3>UltraActive</h3>
           <div>
            <a href="#Shop">Shop</a>
            <a href="#Orders">Orders</a>
            <a href="#Inventory">Inventory</a>
            <a href="#About">About</a>
           </div>
        </nav>
    );
};

export default Header;