import { useState } from 'react';

const RestroomAdd = ({ onClose, setClickToAdd, addLocation }) => {

  const defaultRestroom = {
    name: '',
    location: addLocation,
    category: 'Public',
    toiletType: 'Flush',
    accessible: false,
    keyRequired: false,
    genders: [],
    hours: '',
    cleanliness: 3,
    toiletPaper: false,
    handwash: []
  };

  const [restroomAdd, setRestroomAdd] = useState(defaultRestroom);

  const handleAddSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted: ', restroomAdd);
    onClose();
  };

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
    <form onSubmit={handleAddSubmit}>
      <h2>{restroomAdd.name}</h2>
      <p>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          value={restroomAdd.name}
          onChange={(event) => setRestroomAdd({ ...restroomAdd, name: event.target.value })}
        />
      </p>
      <p>
        Location: {restroomAdd.location.lat}, {restroomAdd.location.lng}
      </p>
      <p>
        <span role="img" aria-label="Location">📍</span>
        <select value={restroomAdd.category} onChange={(event) => setRestroomAdd({
          ...restroomAdd,
          category: event.target.value,
          customersOnly: event.target.value.slice(0,9) !== 'Business:' ? false : restroomAdd.customersOnly
        })}>
          {categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        {restroomAdd.category.slice(0,9) === 'Business:' &&
          <select value={restroomAdd.customersOnly} onChange={(event) => setRestroomAdd({ ...restroomAdd, customersOnly: event.target.value })}>
            <option value={true}>Customers Only</option>
            <option value={false}>Non-Customers Welcome</option>
          </select>
        }
      </p>
      <p>
        <span role="img" aria-label="Toilet Type">🚽 </span>
        <select value={restroomAdd.toiletType} onChange={(event) => setRestroomAdd({ ...restroomAdd, toiletType: event.target.value })}>
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
              checked={restroomAdd.genders.includes(gender)}
              onChange={(event) => {
                if (event.target.checked) {
                  setRestroomAdd({
                    ...restroomAdd,
                    genders: [...restroomAdd.genders, gender]
                  });
                } else {
                  setRestroomAdd({
                    ...restroomAdd,
                    genders: restroomAdd.genders.filter((g) => g !== gender)
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
        <select value={restroomAdd.accessible} onChange={(event) => setRestroomAdd({ ...restroomAdd, accessible: event.target.value })}>
          <option value={true}>Accessible</option>
          <option value={false}>No Accessible Restroom</option>
        </select>
      </p>
      <p>
        <span role="img" aria-label="Hours">🕰️</span>
        <input
          type="text"
          value={restroomAdd.hours}
          onChange={(event) => setRestroomAdd({ ...restroomAdd, hours: event.target.value })}
        />
      </p>
      <p>
        <span role="img" aria-label="Handwash">🧼</span>
        {handwashOptions.map((option) => (
          <label key={option}>
            <input
              type="checkbox"
              value={option}
              checked={restroomAdd.handwash.includes(option)}
              onChange={(event) => {
                if (event.target.checked) {
                  setRestroomAdd({
                    ...restroomAdd,
                    handwash: [...restroomAdd.handwash, option]
                  });
                } else {
                  setRestroomAdd({
                    ...restroomAdd,
                    handwash: restroomAdd.handwash.filter((h) => h !== option)
                  });
                }
              }}
            />
            {option}
          </label>
        ))}
      </p>
      <p>
        <select value={restroomAdd.toiletPaper} onChange={(event) => setRestroomAdd({ ...restroomAdd, toiletPaper: event.target.value })}>
          <option value={true}>🧻 Toilet Paper Available</option>
          <option value={false}>🚫🧻 Toilet Paper Unavailable</option>
        </select>
      </p>
      <p>
        <label htmlFor="cleanliness">Rate Cleanliness:</label>
          {Object.entries(cleanlinessIcons).map(([rating, icon]) => (
            <label key={rating}>
              <input
                type="radio"
                name="cleanliness"
                value={rating}
                checked={restroomAdd.cleanliness === rating}
                onChange={(event) => setRestroomAdd({ ...restroomAdd, cleanliness: event.target.value })}
              />
              {icon}
            </label>
          ))}
      </p>
      <button type="submit">Submit</button>
    </form>
  );
};

export default RestroomAdd;