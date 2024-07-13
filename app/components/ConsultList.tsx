// src/components/ConsultationsList.tsx
import { useState } from 'react';

function ConsultList () {
  const [consultations, setConsultations] = useState([]);

  return (
    <div>
      {consultations.map((consultation) => (
        <div key={'consultation._id'}>
          {/* Display consultation details */}
          hey
        </div>
      ))}
    </div>
  );
};

export default ConsultList;
