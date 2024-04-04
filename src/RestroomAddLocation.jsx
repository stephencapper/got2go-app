

function RestroomAddLocation({ setClickToAdd, onClose }) {
  return (
    <p>
        Select location by clicking on map
        <button
          type="button"
          onClick={() => {
            setClickToAdd(true);
            onClose();
          }}
        >
          Select Location
        </button>
      </p>
  );
}

export default RestroomAddLocation;