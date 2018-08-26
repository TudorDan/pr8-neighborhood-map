import React, { Component } from 'react'
import './App.css'
import Finder from './Finder'

class App extends Component {
  state = {
    venues: [],
    map: {},
    bounds: {}
  }

    componentDidMount() {
    /* get Foursquare data & simplifies it */
    fetch(
      'https://api.foursquare.com/v2/venues/explore?'+
      'client_id=5NB01HPQ1IKYMXI54ML15CTXA0DY0LKTYEM4X4XCRR1H2F4P&'+
      'client_secret=HRLCVRFQNWF2GDWD53QGA0LXMWLESFYA2SFLESDADBBHXZOE&'+
      'near=Bistrița&'+
      'v=20180825')
    .then((data) => {
      if(data.ok) {
        return data.json()
      } else {
        console.log('Unable to retrieve online data.')
      }
    })
    .then((data) => {
      if(data) {
        this.setState({
          bounds: data.response.suggestedBounds,
          venues: data.response.groups[0].items.map((dv) => {
            return {
              id: dv.venue.id,
              name: dv.venue.name,
              location: {lat: dv.venue.location.lat, lng: dv.venue.location.lat},
              type: dv.venue.categories[0].name,
              icon: dv.venue.categories[0].icon ? (dv.venue.categories[0].icon.prefix + '32' + dv.venue.categories[0].icon.suffix) : 'https://via.placeholder.com/32x32.png?text=X',
              adress: dv.venue.location.formattedAddress[0] ? dv.venue.location.formattedAddress[0] : 'Unspecified',
            }
          })
        })
      }
    })
    /* get google map */
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Venues in Bistrița, Romania</h1>
        </header>
        <Finder venues={this.state.venues} bounds={this.state.bounds} map={this.state.map}/>
      </div>
    )
  }
}

export default App
