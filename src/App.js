import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {

  //load venues data from Foursquare
  /*
  fetch('https://api.foursquare.com/v2/venues/explore?'+
        'client_id=5NB01HPQ1IKYMXI54ML15CTXA0DY0LKTYEM4X4XCRR1H2F4P'+
        '&client_secret=HRLCVRFQNWF2GDWD53QGA0LXMWLESFYA2SFLESDADBBHXZOE'+
        '&near=Bistrița')
    .then(function() {
        // Code for handling API response
    })
    .catch(function() {
        // Code for handling errors
    });
  */


  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h1 className="App-title">Recommended venues in Bistrița, Romania</h1>
        </header>

      </div>
    );
  }
}

export default App;
