import React, { useState } from 'react';
import { GrRestroom } from 'react-icons/gr';
import {
  APIProvider,
  Map,
} from '@vis.gl/react-google-maps';

import RestroomPin from './RestroomPin.jsx';

import './RestroomMap.css'

function RestroomMap() {
  const [mapLocation, setMapLocation] = useState({lat: 37.8611216, lng: -122.2357803});
  const restroomLocation = {lat: 37.85605, lng: -122.2064};
  return (
    <APIProvider apiKey={process.env.GOOGLE_MAPS_API_KEY}>
      <Map
        className="map"
        defaultCenter={mapLocation}
        defaultZoom={13}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
        mapId={process.env.MAP_ID}
      >
        <RestroomPin restroomLocation={restroomLocation}/>
      </Map>
    </APIProvider>
  )
}

export default RestroomMap
