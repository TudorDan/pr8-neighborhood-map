import React, { Component } from 'react';
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import List from './List'
import MapComp from './MapComp'

class Finder extends Component {
	static propTypes = {
		venues: PropTypes.array.isRequired
	}

	state = {
		query: '',
		selectedID: '' /*id of selected venue*/
	}

	updateQuery = (query) => {
		this.setState({ 
			query: query.trim(),
			selectedID: ''
		})
	}

	render() {
		const { venues } = this.props
		const { query, selectedID } = this.state
		let foundVenues

		if(query) {
			const match = new RegExp(escapeRegExp(query), 'i')
			foundVenues = venues.filter(venue => (match.test(venue.name) || match.test(venue.type)))
		} else {
			foundVenues = venues
		}

		return (
			<div className="finder">
				<input
					className='search-venues'
					type='text'
					placeholder='Search venues'
					value={query}
					onChange={(event) => this.updateQuery(event.target.value)}
				/>
				<List 
					venues={foundVenues} 
					selected={selectedID}
				/>
				<MapComp 
					venues={foundVenues}
					selected={selectedID}
					googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBT-eboO6ZtfUG6q-eTsNw3VM3pZvoQi6g&v=3.exp&libraries=geometry,drawing,places"
  					loadingElement={<div style={{ height: `100vh` }} />}
  					containerElement={<div style={{ height: `100vh` }} />}
  					mapElement={<div style={{ height: `100vh` }} />}
				/>
			</div>
		)
	}
}

export default Finder