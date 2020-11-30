import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import data from './utility/data.json';

class App extends Component {

  render(){
    return (
      <div className="App">
          <Header />
          

          
          <p>
            Please see below the table of All Vehicles!
          </p>
          
          
      </div>
    );
  }
  
}


export default App;
