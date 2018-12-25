import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Bio from './components/Bio'
import ShowComponent from './components/ShowComponent'
import './fabric1.jpg';


class App extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="contentFlow">
          <Main />
          <Bio />
          <ShowComponent />
        </div>
      </div>
    );
  }
}

export default App;
