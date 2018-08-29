import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import PropTypes from 'prop-types'

const MapComp = withScriptjs(withGoogleMap((props) => {
	const { venues , selected , onSelection } = props
	return <GoogleMap
		defaultZoom={13}
		defaultCenter={ {lat:47.13316 ,lng: 24.50011} }>
		{venues.map(venue => <Marker
			key={ venue.id }
			position={ {lat:venue.location.lat ,lng: venue.location.lng} }
			animation={ selected===venue.id ? window.google.maps.Animation.BOUNCE : window.google.maps.Animation.DROP }
			onClick={ () => onSelection(venue.id) }
		></Marker>)}
	</GoogleMap>
}))

MapComp.PropTypes = {
	venues: PropTypes.array.isRequired,
	selected: PropTypes.string,
	onSelection: PropTypes.func.isRequired
}

export default MapComp