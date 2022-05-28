import React from 'react';
import useCandidate from '../hooks/useCandiate';
import Header from '../Header';
import Home from '../Home';

function HomePage() {
  const { candidates } = useCandidate();
  return (
    <>
      <Header />
      <Home candidates={candidates} />;
    </>
  );
}

export default HomePage;
