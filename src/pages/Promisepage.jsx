import React from 'react';
import usePromise from '../hooks/usePromise';
import CandidatePromise from '../Components/Candidate/CandidatePromise';

function Promisepage() {
  const { candidates } = usePromise();
  return <CandidatePromise candidates={candidates} />;
}

export default Promisepage;
