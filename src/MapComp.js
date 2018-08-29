import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import PropTypes from 'prop-types'

const MapComp = withScriptjs(withGoogleMap((props) => {
	const { venues , center , bounds , selected , onSelection } = props
	let bnd = new window.google.maps.LatLngBounds();
	bnd.extend(bounds.ne);
	bnd.extend(bounds.sw);
	return <GoogleMap
		ref={map => map && map.fitBounds(bnd)}
		defaultCenter={ center }
		defaultZoom={14}
		>
			{venues.map(venue => <Marker
				key={ venue.id }
				position={ venue.location }
				animation={ selected===venue.id && window.google.maps.Animation.BOUNCE }
				onClick={ () => onSelection(venue.id) }
			></Marker>)}
	</GoogleMap>
}))

MapComp.PropTypes = {
	venues: PropTypes.array.isRequired,
	selected: PropTypes.string,
	center: PropTypes.object.isRequired,
	bounds: PropTypes.object.isRequired,
	onSelection: PropTypes.func.isRequired
}

export default MapComp