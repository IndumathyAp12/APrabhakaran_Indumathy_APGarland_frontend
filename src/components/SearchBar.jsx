import React from 'react';

const SearchBar = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
    />
  );
};

export default SearchBar;
