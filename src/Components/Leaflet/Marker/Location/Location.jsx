import React, { useState } from 'react'

import { Marker, Popup, useMapEvents } from 'react-leaflet'

import DefaultIcon from 'Components/Leaflet/Marker/Default/Default'

const Location = () => {
	const [Position, SetPosition] = useState(null)

	const map = useMapEvents({
		click(event) {
			SetPosition(event.latlng)

			map.flyTo(event.latlng, map.getZoom())
		},
	})

	return Position === null ? null : (
		<Marker position={Position} icon={DefaultIcon}>
			<Popup>You are here</Popup>
		</Marker>
	)
}

export default Location
