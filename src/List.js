/*
* Displays a list of filtered venues and
* sends selected venue id to Finder
*/

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
		visible: true  /* false = list is hidden */
	}

	/* Toggles visible / hidden state */
	toggleList = () => {
		this.setState({ visible: !this.state.visible })
	}

	/* Selects the venue on Enter key press */
	onEnter = (id, event) => {
		if(event.key === 'Enter') {
			this.props.onSelection(id)
		}
	}

	render() {
		const { venues , selected , onSelection } = this.props
		const { visible } = this.state
		return (
			<div className={'list-container' + (visible ? ' list-visible' : ' list-hidden')}>
				{/* show / hide list button */}
				<button 
					aria-label="Show or hide the list of venues" 
					className="toggle" 
					onClick={ this.toggleList }>{visible ? 'Hide list' : 'Show list'}
				</button>

				{/* the list of venues */}
				<div className="list-venues">
					<h2>Top venues</h2>
					<ul className="venues-list" aria-label="List of venues">
						{venues.map(venue => { return (
							<li 
								key={venue.id} 
								onClick={() => onSelection(venue.id)}  /* handles select by click */
								onKeyPress={(e) => this.onEnter(venue.id, e)}  /* handles select by enter key */
								className={selected===venue.id ? 'selected' : 'unselected'} /* handles aspect change on select */
								aria-label={"Show or hide adress of " + venue.name}
								role="button"
								tabIndex="0">
									<img src={venue.icon} alt={venue.type}></img> {/* displays a customized icon for each venue based on venue type */}
									<h3>{venue.name}</h3>
									<p>{venue.type}</p>

									{/* displays additional info (address) for selected venue */}
									{ selected===venue.id && <p><strong>Adress:</strong> {venue.adress} </p> }
							</li>
						)})}
					</ul>
				</div>
			</div>
		)
	}
}

export default List