import {
  APIProvider,
  Map,
} from '@vis.gl/react-google-maps';

import RestroomPins from './RestroomPins.jsx';

import './RestroomMap.css'

function RestroomMap({ restrooms, mapLocation, setPortalRestroom, setPortalView, setShowRestroomPortal }) {
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
        <RestroomPins restrooms={restrooms} setPortalRestroom={setPortalRestroom} setPortalView={setPortalView} setShowRestroomPortal={setShowRestroomPortal}/>
      </Map>
    </APIProvider>
  )
}

export default RestroomMap
