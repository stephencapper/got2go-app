import React from 'react';
import {APIProvider, Map} from '@vis.gl/react-google-maps';
import restroomLogo from './assets/restroom-svgrepo-com.svg';

import RestroomMap from './RestroomMap';

import './App.css'

function App() {
  const restrooms = [
    {
      _id: '1',
      location: {lat: 37.85605, lng: -122.2064},
      category: 'Public',
      customersOnly: false,
      toiletType: 'Chemical',
      handicapAccessible: true,
      keyRequired: false,
      hours: '24/7',
      cleanliness: 2,
      toiletPaper: true,
      handwash: ['none']
    },
    {
      _id: '2',
      location: {lat: 37.85605, lng: -122.2064},
      category: 'Coffee Shop',
      customersOnly: true,
      toiletType: 'Flush',
      handicapAccessible: true,
      keyRequired: false,
      hours: 'Mon-Fri 5am-6:30pm, Sat 5:30am-6:30pm, Sun 6am-6:30pm',
      cleanliness: 4,
      toiletPaper: true,
      handwash: ['hot water', 'soap', 'hand dryer']
    }
  ];
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
      <RestroomMap />
      <p className="information">
        Click on a restroom for more information
      </p>
    </>
  )
}

export default App
