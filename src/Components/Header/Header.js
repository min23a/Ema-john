import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userInfo } from '../../App';
import logo from '../../logo.png';
import "./Header.css";
import firebase from "firebase/app";
import "firebase/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [user,setUser] = useContext(userInfo);
    const {displayName} = user;
    const handleGSignOut = () => {
        firebase.auth().signOut().then(() => {
            setUser({});

        }).catch((error) => {
            // An error happened.
        });
    }
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <ul className="menu_list">
                <li><Link className="menu_item" to="/shop">Shop</Link></li>
                <li><Link className="menu_item" to="/review">Order Review</Link></li>
                <li><Link className="menu_item" to="/inventory">Manage Inventory Here</Link></li>
                { displayName &&
                    <>
                        <li className="menu_item"><FontAwesomeIcon icon={faUser}/> { displayName}</li>
                        <li className="menu_item">
                            <button className="menu_button" onClick={handleGSignOut}>Sign out</button>
                        </li>
                    </>
                }
                
            </ul>
        </div>
    );
};

export default Header;