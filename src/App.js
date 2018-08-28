import React, { Component } from 'react'
import './App.css'
import Finder from './Finder'
import * as foursquareAPI from './FoursquareAPI';

class App extends Component {
  state = {
    center: {},
    bounds: {},
    venues: []
  }

  componentWillMount() {
    foursquareAPI.getData().then(data => { 
      this.setState( {
        center: data.center,
        bounds: data.bounds,
        venues: data.venues
      })
    })
  }

  render() { return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Venues in Bistrița, Romania</h1>
        <p>Data imported from <a href='https://foursquare.com/explore?near=Bistriţa'>Foursquare</a></p>
      </header>
      <Finder center={this.state.center} bounds={this.state.bounds} venues={this.state.venues}/>
    </div>
  )}
}

export default App