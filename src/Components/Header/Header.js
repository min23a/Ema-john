import React from 'react';
import logo from '../../logo.png';
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <ul className="menu_list">
                <li><a className="menu_item" href="/shop">Shop</a></li>
                <li><a className="menu_item" href="/review">Order Review</a></li>
                <li><a className="menu_item" href="/inventory">Manage Inventory Here</a></li>
            </ul>
        </div>
    );
};

export default Header;