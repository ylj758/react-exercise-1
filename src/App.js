import React, { Component } from 'react';
import './App.scss';
import Header from './component/Header.js';
import AboutMe from './component/AboutMe.js';
import Educational from './component/Educational.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <AboutMe></AboutMe>
        <Educational></Educational>
      </div>
    );
  }
}

export default App;
