import PropTypes from 'prop-types';
import { GrRestroom } from 'react-icons/gr';
import {
  AdvancedMarker,
  Pin
} from '@vis.gl/react-google-maps';

import './RestroomPin.css'

function RestroomPin({ restroom, setPortalRestroom, setPortalView, setShowRestroomPortal }) {

  const restroomLocation = restroom.location;

  const handlePinClick = () => {
    setShowRestroomPortal(true);
    setPortalRestroom(restroom);
    setPortalView('details');
  }
  return (
    <AdvancedMarker
      position={restroomLocation}
      title={'Click for details'}
      clickable={true}
      onClick={handlePinClick}
      >
      <Pin background={'#242424'} borderColor={'#1a1a1a'} scale={1.4}>
        {/* children are rendered as 'glyph' of pin */}
        <GrRestroom className="restroom-icon"/>
      </Pin>
    </AdvancedMarker>
  )
}

RestroomPin.propTypes = {
  restroom: PropTypes.object.isRequired
};

export default RestroomPin
