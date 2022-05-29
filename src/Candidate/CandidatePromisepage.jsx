import React from 'react';
import usePromise from '../usePromise';
import CandidatePromise from './CandidatePromise';

function CandidatePromisepage() {
  const { candidates } = usePromise();
  return <CandidatePromise candidates={candidates} />;
}

export default CandidatePromisepage;
