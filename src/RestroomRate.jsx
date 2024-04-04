import { useState } from 'react';
import { putRestroom } from './models/models';

const RestroomRate = ({ restroom, onClose, loadRestrooms }) => {
  const [restroomUpdate, setRestroomUpdate] = useState(restroom);

  const handleUpdateSubmit = (event) => {
    event.preventDefault();
    putRestroom(restroomUpdate)
      .then(() => {
        loadRestrooms();
        onClose()
      })
      .catch((error) => {
        console.log('Error: ', error);
      });
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

  const handwashOptions = [
    'Hot water',
    'Cold water',
    'Soap',
    'Hand sanitizer',
    'Hand dryer',
    'Paper towels',
    'No Handwash Facilities'
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

        {Object.entries(genderIcons).map(([gender, icon]) => (
          <label key={gender}>
            <input
              type="checkbox"
              value={gender}
              checked={restroomUpdate.genders.includes(gender)}
              onChange={(event) => {
                if (event.target.checked) {
                  setRestroomUpdate({
                    ...restroomUpdate,
                    genders: [...restroomUpdate.genders, gender]
                  });
                } else {
                  setRestroomUpdate({
                    ...restroomUpdate,
                    genders: restroomUpdate.genders.filter((g) => g !== gender)
                  });
                }
              }}
            />
            <span>{icon}</span> {gender}
          </label>
        ))}
      </p>
      <p>
        <span role="img" aria-label="Accessible">♿ </span>
        <select value={restroomUpdate.accessible} onChange={(event) => setRestroomUpdate({ ...restroomUpdate, accessible: event.target.value })}>
          <option value={true}>Accessible</option>
          <option value={false}>No Accessible Restroom</option>
        </select>
      </p>
      <p>
        <span role="img" aria-label="Hours">🕰️</span>
        <input
          type="text"
          value={restroomUpdate.hours}
          onChange={(event) => setRestroomUpdate({ ...restroomUpdate, hours: event.target.value })}
        />
      </p>
      <p>
        <span role="img" aria-label="Handwash">🧼</span>
        {handwashOptions.map((option) => (
          <label key={option}>
            <input
              type="checkbox"
              value={option}
              checked={restroomUpdate.handwash.includes(option)}
              onChange={(event) => {
                if (event.target.checked) {
                  setRestroomUpdate({
                    ...restroomUpdate,
                    handwash: [...restroomUpdate.handwash, option]
                  });
                } else {
                  setRestroomUpdate({
                    ...restroomUpdate,
                    handwash: restroomUpdate.handwash.filter((h) => h !== option)
                  });
                }
              }}
            />
            {option}
          </label>
        ))}
      </p>
      <p>
        <select value={restroomUpdate.toiletPaper} onChange={(event) => setRestroomUpdate({ ...restroomUpdate, toiletPaper: event.target.value })}>
          <option value={true}>🧻 Toilet Paper Available</option>
          <option value={false}>🚫🧻 Toilet Paper Unavailable</option>
        </select>
      </p>
      <button type="submit">Submit</button>
    </form>
  );
};

export default RestroomRate;