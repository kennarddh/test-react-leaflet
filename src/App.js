import React from 'react'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

import DefaultIcon from 'Components/Leaflet/Marker/Default/Default'

import LocationMarker from 'Components/Leaflet/Marker/Location/Location'

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
			<Marker position={[0, 0]} icon={DefaultIcon}>
				<Popup>
					A pretty CSS3 popup. <br /> Easily customizable.
				</Popup>
			</Marker>
			<LocationMarker />
		</MapContainer>
	)
}

export default App
