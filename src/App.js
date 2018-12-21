import React, { Component } from 'react';
import './App.css';
import Header from './component/Header';
import GreenSection from './component/GreenSection';
import Information from './component/Information';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Plug from './component/Plug';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
        <Route exact path="/" component={GreenSection} />
            <Route  path="/Information" component={Information} />
            <Route path="/Plug" component={Plug}/>
            <Route  path="/Contact" component={Contact} />
        </Switch>
        <Footer />

      </div>
    );
  }
}

export default App;
