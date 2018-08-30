/*
* Selects venues by name or type and sends them to the List and MapComp components
* Manages communication of selected venue id between List an MapComp components
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import List from './List'
import MapComp from './MapComp'
import './Finder.css'

class Finder extends Component {
	static propTypes = {
		venues: PropTypes.array.isRequired,
		center: PropTypes.object.isRequired,
	}

	state = {
		query: '',  		/* search string */
		selectedID: '', /* id of selected venue */
		hasError: false /* true if MapComp throws any error */
	}

	/* Sets Finder as a error boundary and logs catced errors */
  componentDidCatch(error, info) {
  	console.clear()
  	console.log(error)
  	console.log('Additional info:' + info.componentStack)
    this.setState({ hasError: true });
  }

  /* Updates search string */
	updateQuery = (query) => {
		this.setState({ 
			query: query.trim(),
			selectedID: ''
		})
	}

	/* Updates id of selected venue */
	updateSelected = (id) => {
		this.setState({ selectedID: id===this.state.selectedID ? '' : id })
	}

	render() {
		const { venues , center } = this.props
		const { query, selectedID , hasError } = this.state
		
		let foundVenues

		/* Filters venues based on search string, by name or type */
		if(query) {
			const match = new RegExp(escapeRegExp(query), 'i')
			foundVenues = venues.filter(venue => (match.test(venue.name) || match.test(venue.type)))
		} else {
			foundVenues = venues
		}

		return (
			<div className="finder">

				{/* Search field */}
				<div className="search-zone">
					<input
						className="search-field"
						type="text"
						placeholder="Search venues by name or type"
						value={query}
						onChange={(event) => this.updateQuery(event.target.value)}
					/>
				</div>

				{/* List of found venues */}
				<div className="list-zone">
					<List 
						venues={foundVenues} 
						selected={selectedID}
						onSelection={this.updateSelected}
					/>
				</div>

				{/* Map of venues or custon error UI if there are problems connecting to Google Maps API */}
				{	!hasError ? <MapComp 
						venues={foundVenues}
						selected={selectedID}
						center={center}
						onSelection={this.updateSelected}
						googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBT-eboO6ZtfUG6q-eTsNw3VM3pZvoQi6g&v=3.exp"
						loadingElement={<div style={{ height: `100vh` }} id="mapLoading"/>}
						containerElement={<div style={{ height: `100vh` }} id="mapContainer" />}
						mapElement={<div style={{ height: `100vh` }} id="mapElement"/>}
					/> : <div className="error"> 
						Google Maps API is not available (network error). Please 
						check <a href="https://kb.mailster.co/how-can-i-open-the-browsers-console/">the console</a> and 
						contact	<a href="https://github.com/TudorDan">the app admin</a>.
					</div>
				}
			</div>
		)
	}
}

export default Finder