import React, { Component } from 'react';
import MainJumbo from './components/main-jumbo';
import Gallery from './components/gallery';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainJumbo />
        <Gallery />
      </div>
    );
  }
}

export default App;
