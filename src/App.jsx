import React from 'react'

import {APIProvider, Map} from '@vis.gl/react-google-maps';

import restroomLogo from './assets/restroom-svgrepo-com.svg'
import './App.css'

function App() {
  return (
    <>
      <div>
        <img src={restroomLogo} className="logo" alt="Restroom logo" />
      </div>
      <h1>got2go</h1>
      <div className="card">
        <p>
          The app for sharing and finding restrooms
        </p>
      </div>
      <APIProvider apiKey={process.env.GOOGLE_MAPS_API_KEY}>
        <Map
          className="map"
          defaultCenter={{lat: 37.8611216, lng: -122.2357803}}
          defaultZoom={13}
          gestureHandling={'greedy'}
          disableDefaultUI={true}
        />
      </APIProvider>
      <p className="information">
        Click on a restroom to find more information
      </p>
    </>
  )
}

export default App
