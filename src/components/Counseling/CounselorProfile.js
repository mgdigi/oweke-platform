import React from 'react';
import { useParams } from 'react-router-dom';
import counselorService from '../../services/counselorService';

const CounselorProfile = () => {
  const { id } = useParams();
  const [counselor, setCounselor] = React.useState(null);

  React.useEffect(() => {
    counselorService.getCounselorById(id).then(data => setCounselor(data));
  }, [id]);

  if (!counselor) return <div>Loading...</div>;

  return (
    <div className="counselor-profile">
      <h2>{counselor.name}</h2>
      <p>{counselor.specialty}</p>
      <p>{counselor.description}</p>
      <button>Réservez une Consultation</button>
    </div>
  );
};

export default CounselorProfile;