import React from 'react';
import usePromise from '../hooks/usePromise';
import CandidatePromiseVoice from '../Candidate/CandidatePromiseVoice';

function PromiseVoicepage() {
  const { candidates } = usePromise();
  return <CandidatePromiseVoice candidates={candidates} />;
}

export default PromiseVoicepage;
