import React from 'react'

import { MapContainer, TileLayer } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

import LocationMarker from 'Components/Leaflet/Marker/Location/Location'
import DraggableMarker from 'Components/Leaflet/Marker/Draggable/Draggable'

import Minimap from 'Components/Leaflet/Minimap/Minimap'

const App = () => {
	return (
		<MapContainer
			center={[0, 0]}
			zoom={13}
			scrollWheelZoom={false}
			style={{
				width: '100vw',
				height: '100vh',
			}}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
			/>
			<LocationMarker />
			<DraggableMarker />
			<Minimap position='topright' />
		</MapContainer>
	)
}

export default App
