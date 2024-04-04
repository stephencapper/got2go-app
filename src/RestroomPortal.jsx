import { useState } from 'react';
import PropTypes from 'prop-types';
import './RestroomPortal.css';
import RestroomDetails from './RestroomDetails.jsx';
import RestroomRate from './RestroomRate.jsx';
import RestroomAdd from './RestroomAdd.jsx';
import RestroomAddLocation from './RestroomAddLocation.jsx';

function RestroomPortal(
  {
    onClose,
    restroom,
    setPortalView,
    portalView,
    setClickToAdd,
    addLocation
  }
) {
  const handleRateClick = () => {
    setPortalView('rate');
  }
  return (
    <>{portalView === 'details' && (
    <dialog open className="restroom-portal">
      <RestroomDetails restroom={restroom} />
      <button className="restroom-portal__button" onClick={handleRateClick}>
        Rate Cleanliness and/or Update Details
      </button>
      <br/>
      <button className="restroom-portal__button" onClick={onClose}>
        Close
      </button>
    </dialog>
    )}
    {portalView === 'rate' && (
      <dialog open className="restroom-portal">
        <h2>Rate Cleanliness and/or Update Details</h2>
        <RestroomRate restroom={restroom} onClose={onClose}/>
        <button className="restroom-portal__button" onClick={onClose}>
          Close
        </button>
      </dialog>
    )}
    {portalView === 'add' && (
      <dialog open className="restroom-portal">
        <h2>Add New Restroom</h2>
        <RestroomAdd onClose={onClose} addLocation={addLocation}/>
        <button className="restroom-portal__button" onClick={onClose}>
          Close
        </button>
      </dialog>
    )}
    {portalView === 'addLocation' && (
      <dialog open className="restroom-portal">
        <h2>Add New Restroom</h2>
        <RestroomAddLocation onClose={onClose} setClickToAdd={setClickToAdd} setPortalView={setPortalView}/>
        <button className="restroom-portal__button" onClick={onClose}>
          Close
        </button>
      </dialog>
    )}
  </>
  )
}

export default RestroomPortal;

RestroomPortal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

