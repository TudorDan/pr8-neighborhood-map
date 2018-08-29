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
		query: '',
		selectedID: '' /*id of selected venue*/
	}

	updateQuery = (query) => {
		this.setState({ 
			query: query.trim(),
			selectedID: ''
		})
	}

	updateSelected = (id) => {
		this.setState({ selectedID: id===this.state.selectedID ? '' : id })
	}

	render() {
		const { venues , center } = this.props
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
				<div className="search-zone">
					<input
						className="search-field"
						type="text"
						placeholder="Search venues by name or type"
						value={query}
						onChange={(event) => this.updateQuery(event.target.value)}
					/>
				</div>
				<div className="list-zone">
					<List 
						venues={foundVenues} 
						selected={selectedID}
						onSelection={this.updateSelected}
					/>
				</div>
				<MapComp 
					venues={foundVenues}
					selected={selectedID}
					center={center}
					onSelection={this.updateSelected}
					googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBT-eboO6ZtfUG6q-eTsNw3VM3pZvoQi6g&v=3.exp"
					loadingElement={<div style={{ height: `100vh` }} />}
					containerElement={<div style={{ height: `100vh` }} />}
					mapElement={<div style={{ height: `100vh` }} />}
				/>
			</div>
		)
	}
}

export default Finder