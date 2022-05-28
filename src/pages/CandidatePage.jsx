import React from 'react';
import useCandidate from '../hooks/useCandiate';
import CandidateInformation from '../Candidate/CandidateInformation';

function CandidatePage() {
  const { candidates } = useCandidate();
  console.log(candidates);

  return <CandidateInformation candidates={candidates} />;
}

export default CandidatePage;
