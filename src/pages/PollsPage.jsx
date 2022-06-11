import React, { useState, useEffect } from 'react';
import usePolls from '../hooks/usePoll';
import Polls from '../Components/Polls/Polls';
import Header from '../Components/Header';
import Map from '../Components/Polls/Map';
import { getCoordinate } from '../hooks/geocoding';

function PollsPage() {
  const { latlngArray, prePolls, mainPolls } = usePolls();
  const [location, setLocation] = useState();

  const fetchData = async () => {
    const { lat, lng } = await getCoordinate();
    setLocation({ lat, lng });
  };

  useEffect(() => {
    fetchData();
    console.log(latlngArray);
  }, [latlngArray]);

  return (
    <>
      <Header />
      {location && <Map latlng={location} latlngArray={latlngArray} />}
      <Polls prePolls={prePolls} mainPolls={mainPolls} />
    </>
  );
}

export default PollsPage;
