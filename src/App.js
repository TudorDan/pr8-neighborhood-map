import React, { Component } from 'react'
import './App.css'
import Finder from './Finder'
import * as foursquareAPI from './FoursquareAPI';

class App extends Component {
  state = {
    center: {}, /* map center */
    venues: []  /* list of top venues from foursquare */
  }

  /* loads venues data from Foursquare 'explore' endpoint */
  componentWillMount() {
    foursquareAPI.getData().then(data => { 
      if(data) {
      this.setState( {
        center: data.center,
        venues: data.venues
      })}
    })
  }

  render() { return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Venues in {foursquareAPI.PLACE}</h1>
        <p>Data offered by <a href='https://foursquare.com/explore?near=Bistriţa'>Foursquare</a></p>
      </header>

      {/* Displays Finder comp if data is available or custom error UI if not */}
      { this.state.center.lat 
        ? <Finder center={this.state.center} venues={this.state.venues}/> 
        : <div className="error">No data available yet online or on-device. Please check your Internet connection and try again later.</div> }
    </div>
  )}
}

export default App