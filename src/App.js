import React, { Component } from 'react';
import './assets/style.css';
import './assets/bootstrap.min.css';
import './assets/responsive.css';
import  Home from './Home.js';
import{BrowserRouter}from 'react-router-dom';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );
  }
}

export default App;
