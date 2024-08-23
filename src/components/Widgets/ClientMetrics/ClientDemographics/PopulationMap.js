import { Box } from '@mui/material';
import React from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';

const PopulationMap = ({ data }) => {
  return (
    <Box sx={{
        width: 400,
        border: '2px dotted red'
    }}>
    <MapContainer center={[51.505, 0]} zoom={1.5} style={{ height: '200px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {data.map((city, idx) => {
  console.log(city);  // Log each city's data for debugging

  if (city.lat == null || city.lng == null) {
    console.error(`Invalid LatLng for ${city.name}`);
    return null; // Skip this city
  }

  return (
    <CircleMarker
      key={idx}
      center={[city.lat, city.lng]}
      radius={Math.sqrt(city.populationDensity) * 2}
      color="red"
      fillOpacity={0.5}
    >
      <Popup>
        <strong>{city.name}</strong>
        <br />
        Population Density: {city.populationDensity}
      </Popup>
    </CircleMarker>
  );
})}
    </MapContainer>

    </Box>
  );
};

export default PopulationMap;
