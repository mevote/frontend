import React from 'react';
import usePromise from '../hooks/usePromise';
import Voice from '../Components/Promise/Voice';

function PromiseVoicepage() {
  const { candidates } = usePromise();
  return <Voice candidates={candidates} />;
}

export default PromiseVoicepage;
