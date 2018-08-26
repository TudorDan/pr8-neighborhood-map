import React, { Component } from 'react';
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import List from './List'

class Finder extends Component {
	static propTypes = {
		venues: PropTypes.array.isRequired,
		bounds: PropTypes.object
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
		const { venues, bounds } = this.props
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
				<List venues={foundVenues} selected={selectedID}/>
			</div>
		)
	}
}

export default Finder