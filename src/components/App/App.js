import React, { Component } from 'react';
import './App.css';
import NavBar from '../NavBar';
import AsideNav from '../AsideNav';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <AsideNav />
      </div>
    );
  }
}

export default App;
