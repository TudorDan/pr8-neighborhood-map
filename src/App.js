import React, { Component } from 'react';
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
          <h1 className="App-title">Venues in Bistrița, Romania</h1>
        </header>
      </div>
    );
  }
}

export default App;
