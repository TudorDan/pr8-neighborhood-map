import React, { Component } from 'react'
import './App.css'
import Finder from './Finder'
import * as foursquareAPI from './FoursquareAPI';

class App extends Component {
  state = {
    center: {},
    venues: []
  }

  componentWillMount() {
    foursquareAPI.getData().then(data => { 
      this.setState( {
        center: data.center,
        venues: data.venues
      })
    })
  }

  render() { return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Venues in {foursquareAPI.PLACE}</h1>
        <p>Data offered by <a href='https://foursquare.com/explore?near=Bistriţa'>Foursquare</a></p>
      </header>
      { this.state.center.lat ? <Finder center={this.state.center} venues={this.state.venues}/> : <div>Loading ...</div> }
    </div>
  )}
}

export default App