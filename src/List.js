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
				<button 
					aria-label="Show or hide the list of venues" 
					className="toggle" 
					onClick={ this.toggleList }>{visible ? 'Hide list' : 'Show list'}
				</button>
				<div className="list-venues">
					<h2>Top venues</h2>
					<ul className="venues-list" aria-label="List of venues">
						{venues.map(venue => { return (
							<li 
								key={venue.id} 
								onClick={() => onSelection(venue.id)}
								onKeyPress={(e) => this.onEnter(venue.id, e)}
								className={selected===venue.id ? 'selected' : 'unselected'}
								aria-label={"Show or hide adress of " + venue.name}
								role="button"
								tabIndex="0"
							>
									<img src={venue.icon} alt={venue.type}></img>
									<h3>{venue.name}</h3>
									<p>{venue.type}</p>
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