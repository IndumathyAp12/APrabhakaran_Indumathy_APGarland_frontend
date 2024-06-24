import React from 'react';

const GarlandList = ({ garlands }) => {
  return (
    <div>
      {garlands.map(garland => (
        <div key={garland._id} className="garland-item">
          <h2>{garland.name}</h2>
          <p>{garland.description}</p>
          <p>${garland.price}</p>
          <img src={garland.imageUrl} alt={garland.name} />
        </div>
      ))}
    </div>
  );
};

export default GarlandList;
