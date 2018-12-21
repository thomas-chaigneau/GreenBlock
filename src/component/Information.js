import React, { Component } from 'react';
import './Information.css';
import icon from '../icone_1_.png'
import Information2 from './Information2';


class Information extends Component {
  render() {
    return (
      <div>
      <div class="Information">
     <img src={icon} class='icon'/>
     <div class='text'>
     <h2>10% de l'énegie mondiale</h2>
     <p>Internet consomme 10% de l'énérgie mondiale. Obtenez un bilan personnalisé de vos usages online basé sur votre historique de votre de navigation et découvrez commzenr vous limiter à l'essentiel.</p>
      </div>
      </div>
      <Information2/>
      </div>
    );
  }
}

export default Information;
