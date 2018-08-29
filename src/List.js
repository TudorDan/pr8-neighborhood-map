import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './List.css'

class List extends Component{
	static propTypes = {
		venues: PropTypes.array.isRequired,
		selected: PropTypes.string,
		onSelection: PropTypes.func.isRequired
	}

	state = {
		visible: true
	}

	toggleList = () => {
		this.setState({ visible: !this.state.visible })
	}

	render() {
		const { venues , selected , onSelection } = this.props
		const { visible } = this.state
		return (
			<div className={'list-container' + (visible ? ' list-visible' : ' list-hidden')}>
				<button className="toggle" onClick={ this.toggleList }>{visible ? 'Hide list' : 'Show list'}</button>
				<div className="list-venues">
					<h2>Top venues</h2>
					<ul className="venues-list">
						{venues.map(venue => { return (
							<li key={venue.id} onClick={() => onSelection(venue.id)}>
								<h3>{venue.name}</h3>
								<p>{venue.type}</p>
							</li>
						)})}
					</ul>
				</div>
			</div>
		)
	}
}

export default List