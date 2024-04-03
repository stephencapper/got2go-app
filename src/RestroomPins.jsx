import RestroomPin from './RestroomPin.jsx'

function RestroomPins({ restrooms }) {
  const restroomPins = (restrooms) => {
    return restrooms.map((restroom) => {
      return <RestroomPin restroom={restroom} key={restroom._id}/>;
  });
  }
  return (
    <>
      {restroomPins(restrooms)}
    </>
  )
}

export default RestroomPins