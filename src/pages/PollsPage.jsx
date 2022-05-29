import React from 'react';
import usePolls from '../hooks/usePoll';
import Polls from '../Pollscomponent/Polls';
import Header from '../Header';
import Map from '../Pollscomponent/Map';

function PollsPage() {
  const { prePolls, mainPolls } = usePolls();
  return (
    <>
      <Header />
      <Map />
      <Polls prePolls={prePolls} mainPolls={mainPolls} />;
    </>
  );
}

export default PollsPage;
