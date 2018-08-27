import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import PropTypes from 'prop-types'

const MapComp = withScriptjs(withGoogleMap((props) => {
	const {venues} = props
	return <GoogleMap
			defaultZoom={13}
			defaultCenter={ {lat:47.13316 ,lng: 24.50011} }
  		>
  		</GoogleMap>
}))

MapComp.PropTypes = {
	venues: PropTypes.array.isRequired,
}

export default MapComp