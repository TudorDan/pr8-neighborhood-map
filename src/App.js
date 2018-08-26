import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    venues: []
  }

  /* loads from Foursquare API */
  componentDidMount() {
    fetch(
      'https://api.foursquare.com/v2/venues/explore?'+
      'client_id=5NB01HPQ1IKYMXI54ML15CTXA0DY0LKTYEM4X4XCRR1H2F4P&'+
      'client_secret=HRLCVRFQNWF2GDWD53QGA0LXMWLESFYA2SFLESDADBBHXZOE&'+
      'near=Bistrița&'+
      'v=20180825')
    .then((data) => {
      if(data.ok) {
        return data.json()
      }
    })
    .then((data) => {
      const venues = data.response.groups[0].items
      this.setState({venues})
    })
    /* errors handled in serviceWorker */
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Venues in Bistrița, Romania 
            (recommended by <a href="https://foursquare.com/explore?ll=47.133194%2C24.500107&mode=url&near=Bistri%C5%A3a">Foursquare</a>)
          </h1>
        </header>

      </div>
    );
  }
}

export default App;
