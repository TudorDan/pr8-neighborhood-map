/*
* Displays a map of filtered venues and
* sends selected venue id to Finder
*/

import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker , InfoWindow } from 'react-google-maps'
import PropTypes from 'prop-types'
import './MapComp.css'

/* Handles Google Maps API authentication errors by displaying a custom error UI
* Provided by Google, see: https://developers.google.com/maps/documentation/javascript/events#auth-errors
*/
window.gm_authFailure = () => {
	document.getElementById('mapElement').innerHTML = 
		`<div class="error"> 
			Google Maps API is not available (authentication error). Please check  
			<a href="https://kb.mailster.co/how-can-i-open-the-browsers-console/">the console</a> and contact 
			<a href="https://github.com/TudorDan">the app admin</a>.</div>`
}

/* Displays a map centered on the coordinates provided by Foursquare 
*	Adds markers on map for each found venue
* Displays additional info (venue address) on marker click
* Animates marker of selected venue
*/
const MapComp = withScriptjs(withGoogleMap((props) => {
	const { venues , center , selected , onSelection } = props
	return <GoogleMap
			defaultCenter={ center }
			defaultZoom={14}
			> {/*adds markers to map*/}
				{venues.map(venue => <Marker
					key={ venue.id }
					position={ venue.location }
					animation={ selected===venue.id ? window.google.maps.Animation.BOUNCE : window.google.maps.Animation.DROP } /*changes animation based on selection*/
					onClick={ () => onSelection(venue.id) } /*handles venue selection by click*/
				>	{selected===venue.id /*displays address if venue is selected*/
					? <InfoWindow>
							<div className="infodiv" tabIndex="0">
								<h3>{venue.name}</h3>
								<p><strong>Adress:</strong> {venue.adress} </p>
								<p><a href={`https://foursquare.com/v/${venue.id}`}>Display more info on {venue.name}</a></p>
							</div>
						</InfoWindow>
					: ''}
				</Marker>)}
		</GoogleMap>		
}))

MapComp.PropTypes = {
	venues: PropTypes.array.isRequired,
	selected: PropTypes.string,
	center: PropTypes.object.isRequired,
	onSelection: PropTypes.func.isRequired
}

export default MapComp