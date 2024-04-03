import { useState } from 'react';

const RestroomRate = ({ restroom, onClose }) => {
  const [restroomUpdate, setRestroomUpdate] = useState(restroom);

  const handleUpdateSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted');
    onClose();
  }

  const genderIcons = {
    'Male': '♂',
    'Female': '♀',
    'Gender Neutral': '⚥'
  };

  const cleanlinessIcons = {
    1: '😔',
    2: '😕',
    3: '😐',
    4: '🙂',
    5: '😃'
  };

  const categories = [
    'Public',
    'Business: Café or Coffee Shop',
    'Business: Restaurant',
    'Business: Bar',
    'Business: Retail',
    'Business: Hotel',
    'Business: Other'
  ]

  const toiletTypes = [
    'Chemical',
    'Flush',
    'Pit',
    'Urinal only',
    'Squat'
  ]

  return (
    <form onSubmit={handleUpdateSubmit}>
      <h2>{restroomUpdate.name}</h2>
      <p>
        <label htmlFor="cleanliness">Rate Cleanliness:</label>
          {Object.entries(cleanlinessIcons).map(([rating, icon]) => (
            <label key={rating}>
              <input
                type="radio"
                name="cleanliness"
                value={rating}
                checked={restroomUpdate.cleanliness === rating}
                onChange={(event) => setRestroomUpdate({ ...restroomUpdate, cleanliness: event.target.value })}
              />
              {icon}
            </label>
          ))}
      </p>
      <p>
        <span role="img" aria-label="Location">📍</span>
        <select value={restroomUpdate.category} onChange={(event) => setRestroomUpdate({
          ...restroomUpdate,
          category: event.target.value,
          customersOnly: event.target.value.slice(0,9) !== 'Business:' ? false : restroomUpdate.customersOnly
        })}>
          {categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        {restroomUpdate.category.slice(0,9) === 'Business:' &&
          <select value={restroomUpdate.customersOnly} onChange={(event) => setRestroomUpdate({ ...restroomUpdate, customersOnly: event.target.value })}>
            <option value={true}>Customers Only</option>
            <option value={false}>Non-Customers Welcome</option>
          </select>
        }
      </p>
      <p>
        <span role="img" aria-label="Toilet Type">🚽 </span>
        <select value={restroomUpdate.toiletType} onChange={(event) => setRestroomUpdate({ ...restroomUpdate, toiletType: event.target.value })}>
          {toiletTypes.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
        <span> Toilet</span>
      </p>
      <p>
        <span>{genderIcons[restroomUpdate.genders.join(' ')]}</span> {restroomUpdate.genders.join(', ')}
      </p>
      {restroomUpdate.accessible &&
        <>
          <p>
            <span role="img" aria-label="Accessible">♿</span> Accessible
          </p>
          {restroomUpdate.keyRequired
            ? <p><span role="img" aria-label="Key Required">🔑</span> Key Required</p>
            : null
          }
        </>
      }
      <p>
        <span role="img" aria-label="Hours">🕰️</span> {restroomUpdate.hours}
      </p>
      <p>
        <span role="img" aria-label="Handwash">🧼</span> {restroomUpdate.handwash.join(', ') || 'No Handwash'}
      </p>
      <p>
        {restroomUpdate.toiletPaper
          ? <span role="img" aria-label="Toilet Paper Available">🧻</span>
          : <span role="img" aria-label="Toilet Paper Unavailable">🚫🧻</span>
        } Toilet Paper {restroomUpdate.toiletPaper ? 'Available' : 'Unavailable'}
      </p>
    </form>
  );
};

export default RestroomRate;