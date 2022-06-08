import React from 'react';
import usePromise from '../hooks/usePromise';
import Promise from '../Components/Promise/Promise';

function Promisepage() {
  const { candidates } = usePromise();
  console.log(candidates);
  return <Promise candidates={candidates} />;
}

export default Promisepage;
