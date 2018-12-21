import React from 'react';
import './Header.css';
import logo from '../greenblock.png';
import {Link} from 'react-router-dom';

const Header = () => {

    return (
        <div class="Header">
            <img src={logo} alt='logo green' class="logo" />
            <ul>
                <li>
                    <Link to="/" class="link">Home</Link>
                </li>
                <li>
                    <Link to="/Information" class="link">Informations</Link>
                </li>
               
                <li>
                   <Link to ="/Contact" class="link">Featured</Link> 
                </li>
                </ul>
        </div>
    );
}


export default Header;