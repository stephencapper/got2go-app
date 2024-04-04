import RestroomPin from './RestroomPin.jsx'

function RestroomPins({ restrooms, setPortalRestroom, setPortalView, setShowRestroomPortal }) {
  const restroomPins = (restrooms) => {
    return restrooms.map((restroom) => {
      return <RestroomPin restroom={restroom} key={restroom._id} setPortalRestroom={setPortalRestroom} setPortalView={setPortalView} setShowRestroomPortal={setShowRestroomPortal}/>;
  });
  }
  return (
    <>
      {restroomPins(restrooms)}
    </>
  )
}

export default RestroomPins