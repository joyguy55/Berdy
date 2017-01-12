import React, { Component } from 'react';
import './App.css';

import Review from './components/review.js'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Review />
      </div>
    );
  }
}

export default App;
