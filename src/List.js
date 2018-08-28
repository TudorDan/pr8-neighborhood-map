import React, { Component } from 'react'
import PropTypes from 'prop-types'

class List extends Component{
	static propTypes = {
		venues: PropTypes.array.isRequired,
		selected: PropTypes.string
	}

	state = {
		visible: true
	}

	render() {
		const { venues , selected } = this.props
		const { visible } = this.state
		return (
			<div className="list-venues">
				<h2>Top venues</h2>
				<ul className="venues-list">
					{venues.map(venue => { return (
						<li key={venue.id}>
							<h3>{venue.name}</h3>
							<p>{venue.type}</p>
						</li>
					)})}
				</ul>
			</div>
		)
	}
}

export default List