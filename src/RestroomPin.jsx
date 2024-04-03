import { useState } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { GrRestroom } from 'react-icons/gr';
import {
  AdvancedMarker,
  Pin
} from '@vis.gl/react-google-maps';

import './RestroomPin.css'
import RestroomPortal from './RestroomPortal';

function RestroomPin({ restroomLocation }) {
  const [showRestroomPortal, setShowRestroomPortal] = useState(false);
  const handlePinClick = () => {
    setShowRestroomPortal(true);
  }
  return (
    <AdvancedMarker
      position={restroomLocation}
      title={'AdvancedMarker with customized pin.'}
      clickable={true}
      onClick={handlePinClick}
      >
      <Pin background={'#242424'} borderColor={'#1a1a1a'} scale={1.4}>
        {/* children are rendered as 'glyph' of pin */}
        <GrRestroom className="restroom-icon"/>
      </Pin>
      {showRestroomPortal && createPortal(
        <RestroomPortal
          onClose={() => setShowRestroomPortal(false)}
        />,
        document.getElementById('root'),
      )}
    </AdvancedMarker>
  )
}

RestroomPin.propTypes = {
  restroomLocation: PropTypes.object.isRequired
};

export default RestroomPin
