import React, { Component } from 'react';
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'

class Finder extends Component {
	static propTypes = {
		venues: PropTypes.array.isRequired,
		bounds: PropTypes.object
	}

	state = {
		query: '',
	}

	updateQuery = (query) => {
		this.setState({ query: query.trim() })
	}

	render() {
		const { venues, bounds } = this.props
		const { query } = this.state
		let displayedVenues

		if(query) {
			const match = new RegExp(escapeRegExp(query), 'i')
			displayedVenues = venues.filter(venue => (match.test(venue.name) || match.test(venue.type)))
		} else {
			displayedVenues = venues
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
			</div>
		)
	}
}

export default Finder