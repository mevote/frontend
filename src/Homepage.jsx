import React, { useEffect } from 'react';
import useCandidate from './useCandiate';
import Home from './Home';

function HomePage() {
  const { candidates } = useCandidate();
  useEffect(() => {
    console.log(candidates);
  }, []);

  return <Home candidates={candidates} />;
}

export default HomePage;
