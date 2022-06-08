import React from 'react';
import useCandidate from '../hooks/useCandiate';
import CandidateInformation from '../Components/Candidate/CandidateInformation';

function CandidatePage() {
  const { candidates } = useCandidate(3);

  return <CandidateInformation candidates={candidates} />;
}

export default CandidatePage;
