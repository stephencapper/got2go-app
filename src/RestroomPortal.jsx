import React from 'react';
import PropTypes from 'prop-types';
import './RestroomPortal.css';

function RestroomPortal({ onClose }) {
  return (
    <dialog open className="restroom-portal">
      <h2 className="restroom-portal__title">Restroom Information</h2>
      <button className="restroom-portal__close-button" onClick={onClose}>
        Close
      </button>
    </dialog>
  );
}

export default RestroomPortal;

RestroomPortal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

