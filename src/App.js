import React, { Component } from 'react';
import './App.css';
import Header from './component/Header';
import GreenSection from './component/GreenSection';
import Information from './component/Information';
import Information2 from './component/Information2';
import Contact from './component/Contact';
import Footer from './component/Footer';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
        <Route exact path="/" component={GreenSection} />
            <Route exact path="/Information" component={Information} />
            
            <Route exact path="/Contact" component={Contact} />
        </Switch>
        <Footer />

      </div>
    );
  }
}

export default App;
