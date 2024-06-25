import React from 'react';

const GarlandList = ({ products = [] }) => {  
  return (
    <div>
      {products.map(product => (  
        <div key={product._id} className="garland-product">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <img src={product.imageUrl} alt={product.name} />
        </div>
      ))}
    </div>
  );
};

export default GarlandList;
