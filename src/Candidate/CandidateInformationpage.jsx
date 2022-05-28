import React from 'react';
import useCandidate from '../useCandiate';
import CandidateInformation from './CandidateInformation';

function CandidateInformationpage() {
  const { candidates } = useCandidate();
  console.log(candidates);

  return <CandidateInformation candidates={candidates} />;
}

export default CandidateInformationpage;
