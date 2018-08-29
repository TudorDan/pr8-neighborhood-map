import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker , InfoWindow } from 'react-google-maps'
import PropTypes from 'prop-types'

const MapComp = withScriptjs(withGoogleMap((props) => {
	const { venues , center , selected , onSelection } = props
	return <GoogleMap
		defaultCenter={ center }
		defaultZoom={14}
		>
			{venues.map(venue => <Marker
				key={ venue.id }
				position={ venue.location }
				animation={ selected===venue.id ? window.google.maps.Animation.BOUNCE : window.google.maps.Animation.DROP }
				onClick={ () => onSelection(venue.id) }
			>	{selected===venue.id 
				? <InfoWindow>
						<div className="infodiv">
							<h3>{venue.name}</h3>
							<p><strong>Adress:</strong> {venue.adress} </p>
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