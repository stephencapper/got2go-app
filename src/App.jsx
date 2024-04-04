import { useState } from 'react';
import { createPortal } from 'react-dom';
import restroomLogo from './assets/restroom-svgrepo-com.svg';

import RestroomMap from './RestroomMap';
import RestroomPortal from './RestroomPortal';

import './App.css'

function App() {
  const [showRestroomPortal, setShowRestroomPortal] = useState(false);
  const [portalRestroom, setPortalRestroom] = useState(null);
  const [portalView, setPortalView] = useState('details');
  const [clickToAdd, setClickToAdd] = useState(false);
  const [addLocation, setAddLocation] = useState(null);

  const onOpen = () => {
    setShowRestroomPortal(true);
  }

  const restroomsData = [
    {
      _id: '1',
      name: 'Sibley Volcanic Regional Preserve, Old Tunnel Road Staging Area',
      location: {lat: 37.85605, lng: -122.2064},
      category: 'Public',
      customersOnly: false,
      toiletType: 'Chemical',
      accessible: true,
      keyRequired: false,
      genders: ['Gender Neutral'],
      hours: '24/7',
      cleanliness: 2,
      toiletPaper: true,
      handwash: ['No Handwash Facilities']
    },
    {
      _id: '2',
      name: 'Peets Coffee, Orinda',
      location: {lat: 37.87857, lng: -122.18068},
      category: 'Business: Café or Coffee Shop',
      customersOnly: true,
      toiletType: 'Flush',
      accessible: true,
      keyRequired: false,
      genders: ['Male', 'Female'],
      hours: 'Mon-Fri 5am-6:30pm, Sat 5:30am-6:30pm, Sun 6am-6:30pm',
      cleanliness: 4,
      toiletPaper: true,
      handwash: ['Hot water', 'Soap', 'Hand dryer']
    }
  ];

  const [restrooms, setRestrooms] = useState(restroomsData);
  const [mapLocation, setMapLocation] = useState({lat: 37.8611216, lng: -122.2357803});

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
        <button onClick={()=>{
          setPortalView('addLocation');
          onOpen();
          }}>
          Add a restroom
        </button>
      </div>
      <RestroomMap
        restrooms={restrooms}
        mapLocation={mapLocation}
        setPortalRestroom={setPortalRestroom}
        setPortalView={setPortalView}
        setShowRestroomPortal={setShowRestroomPortal}
        clickToAdd={clickToAdd}
        setClickToAdd={setClickToAdd}
        setAddLocation={setAddLocation}
      />
      <p className="information">
        Click on a restroom for more information
      </p>
      {showRestroomPortal && createPortal(
        <RestroomPortal
          onClose={() => (setShowRestroomPortal(false))}
          restroom={portalRestroom}
          portalRestroom={portalRestroom}
          portalView={portalView}
          setPortalView={setPortalView}
          setClickToAdd={setClickToAdd}
          addLocation={addLocation}
        />,
        document.getElementById('root'),
      )}
    </>
  )
}

export default App
