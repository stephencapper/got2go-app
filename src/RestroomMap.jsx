import {
  APIProvider,
  Map,
} from '@vis.gl/react-google-maps';

import RestroomPins from './RestroomPins.jsx';

import './RestroomMap.css'

function RestroomMap({
  restrooms,
  mapLocation,
  setPortalRestroom,
  setPortalView,
  setShowRestroomPortal,
  clickToAdd,
  setClickToAdd,
  setAddLocation
}) {
  return (
    <APIProvider apiKey={process.env.GOOGLE_MAPS_API_KEY}>
      <Map
        className="map"
        defaultCenter={mapLocation}
        defaultZoom={13}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
        mapId={process.env.MAP_ID}
        onClick={(e) => {
          if (clickToAdd) {
            setAddLocation({lat: e.detail.latLng.lat, lng: e.detail.latLng.lng});
            setClickToAdd(false);
            setPortalView('add');
            setShowRestroomPortal(true);
          }
        }}
      >
        <RestroomPins restrooms={restrooms} setPortalRestroom={setPortalRestroom} setPortalView={setPortalView} setShowRestroomPortal={setShowRestroomPortal}/>
      </Map>
    </APIProvider>
  )
}

export default RestroomMap
