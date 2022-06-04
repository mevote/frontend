import React, { useState, useEffect } from 'react';
import usePolls from '../hooks/usePoll';
import Polls from '../Components/Polls/Polls';
import Header from '../Components/Header';
import Map from '../Components/Polls/Map';
import { getCoordinate } from '../hooks/geocoding';

function PollsPage() {
  const { prePolls, mainPolls } = usePolls();
  const [location, setLocation] = useState();

  useEffect(() => {
    const fetchCandidate = async () => {
      const { lat, lng } = await getCoordinate();
      setLocation({ lat, lng });
    };
    fetchCandidate();
  }, []);

  return (
    <>
      <Header />
      {location && <Map latlng={location} />}
      <Polls prePolls={prePolls} mainPolls={mainPolls} />
    </>
  );
}

export default PollsPage;
