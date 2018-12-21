import React, { Component } from 'react';
import './GreenSection.css';
import logo from '../greenblock.png';


class GreenSection extends Component {

  download = () => {
    window.open('http://localhost:3000/')

  }
  render() {
    return (
      <div className="GreenSection">
        <img src={logo} alt='logo green' class="logo" />
        <p>Browse Smarter</p>
        <div class="click">
          <button class="button" onClick={()=>this.download()}><p>Calculer votre impact</p></button>
          
        </div>
      </div>
    );
  }
}

export default GreenSection;
