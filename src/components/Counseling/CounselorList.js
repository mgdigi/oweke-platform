import React, { useState, useEffect } from 'react';
import counselorService from '../../services/counselorService';

const CounselorList = () => {
  const [counselors, setCounselors] = useState([]);

  useEffect(() => {
    counselorService.getAllCounselors().then(data => setCounselors(data));
  }, []);

  return (
    <div className="counselor-list">
      {counselors.map(counselor => (
        <div key={counselor.id} className="counselor-card">
          <h3>{counselor.name}</h3>
          <p>{counselor.specialty}</p>
          <button>Voir Profil</button>
        </div>
      ))}
    </div>
  );
};

export default CounselorList;