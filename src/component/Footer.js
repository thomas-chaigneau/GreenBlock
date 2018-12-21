import React from 'react';
import './Footer.css';
import logo from '../greenblock.png';



const Footer=()=> {
    
        return (
            <div class="Footer">
            <img src={logo} alt='logo green' class="logo" />
          <p>this is the green session!!!</p>
            </div>
        );
    }


export default Footer;
