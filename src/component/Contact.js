import React, { Component } from 'react';
import './Contact.css';
import form from '../form.png'


class Contact extends Component {
    render() {
        return (
            <div class="Contact">
                <h1>Devenez Certifié GreenBlock</h1>
                <h1>Devenir certifier GreenBlock prouvant que votre site est propre énergetiquement.<br/>Suite à l'enquête de nos experts, nous vous certifierons gratuitement!</h1>
               <img src={form} class="form"/>
   
            </div>
        );
    }
}

export default Contact;
