import React, { Component } from 'react';
import './Information2.css';
import icon from '../icone_2_.png'


class Information2 extends Component {
    render() {
        return (
            <div class="Information2">
                <img src={icon} class='icon' />
                <div class='text'>
                    <h2>Vidéo = X10 d'énérgie</h2>
                    <p>Une page intenet avec une vidéo consomme en moyenne 10 fois plus d'énergie qu'une page simple avec GreeBlock,
                         développez les bons réflexes pour la et pour vous </p>
                    <button class="button2"><span>Calculer votre impact</span></button>
                </div>
            </div>
        );
    }
}

export default Information2;
