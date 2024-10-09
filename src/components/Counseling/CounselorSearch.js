import React, { useState } from 'react';
import counselorService from '../../services/counselorService';

const CounselorSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [counselors, setCounselors] = useState([]);

  const handleSearch = () => {
    counselorService.searchBySpecialty(searchTerm).then(data => setCounselors(data));
  };

  return (
    <div className="counselor-search">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Recherchez par spécialité..."
      />
      <button onClick={handleSearch}>Rechercher</button>

      <div className="counselor-list">
        {counselors.map(counselor => (
          <div key={counselor.id} className="counselor-card">
            <h3>{counselor.name}</h3>
            <p>{counselor.specialty}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CounselorSearch;