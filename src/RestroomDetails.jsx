import React from 'react';

const RestroomDetails = ({ restroom }) => {
  const {
    name,
    category,
    customersOnly,
    toiletType,
    genders,
    accessible,
    keyRequired,
    hours,
    cleanliness,
    toiletPaper,
    handwash
  } = restroom;

  const genderIcons = {
    'Male': '♂',
    'Female': '♀',
    'Gender Neutral': '⚥'
  };

  const cleanlinessIcons = {
    0: '😔',
    1: '😔',
    2: '😕',
    3: '😐',
    4: '🙂',
    5: '😃'
  };

  return (
    <div>
      <h2>{name}</h2>
      <p>
        <span role="img" aria-label="Location">📍</span> {category} {customersOnly && '(Customers Only)'}
      </p>
      <p>
        <span role="img" aria-label="Toilet Type">🚽</span> {toiletType} Toilet
      </p>
      <p>
        <span>{genderIcons[genders.join(' ')]}</span> {genders.join(', ')}
      </p>
      {accessible &&
        <>
          <p>
            <span role="img" aria-label="Accessible">♿</span> Accessible
          </p>
          {keyRequired
            ? <p><span role="img" aria-label="Key Required">🔑</span> Key Required</p>
            : null
          }
        </>
      }
      <p>
        <span role="img" aria-label="Hours">🕰️</span> {hours}
      </p>
      <p>
        <span role="img" aria-label="Handwash">🧼</span> {handwash.join(', ') || 'No Handwash'}
      </p>
      <p>
        {toiletPaper
          ? <span role="img" aria-label="Toilet Paper Available">🧻</span>
          : <span role="img" aria-label="Toilet Paper Unavailable">🚫🧻</span>
        } Toilet Paper {toiletPaper ? 'Available' : 'Unavailable'}
      </p>
      <p>
      <span role="img" aria-label="Cleanliness Rating">{cleanlinessIcons[Math.round(cleanliness)]}</span> Cleanliness Rating: {cleanliness}/5
      </p>
    </div>
  );
};

export default RestroomDetails;