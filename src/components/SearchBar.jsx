import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({ value, onChange }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
      <input
        type="text"
        placeholder="Search..."
        value={value}
        onChange={(e) => onChange(e.target.value)} 
        style={{ flex: 1, padding: '0.5rem', borderRadius: '5px 0 0 5px', border: '1px solid #ddd' }}
      />
      <div style={{ padding: '0.5rem', backgroundColor: '#ddd', borderRadius: '0 5px 5px 0' }}>
        <FontAwesomeIcon icon={faSearch} />
      </div>
    </div>
  );
};

export default SearchBar;
