import Geocode from 'react-geocode';

const getPos = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const getCoordinate = async () => {
  if (navigator.geolocation) {
    const position = await getPos();
    return {
      lat: position.coords.latitude,
      lon: position.coords.longitude,
    };
  } else {
    // Geolocation API에 액세스할 수 없으면 서울시청 좌표 리턴
    return {
      lat: 37.566353,
      lon: 126.977953,
    };
  }
};

const run = async () => {
  const { lat, lon } = await getCoordinate();
  Geocode.setApiKey('AIzaSyC5xLfDXfz6s9-soQmiQmLHms6QKeXjJ6s');
  Geocode.setLanguage('ko');
  Geocode.setRegion('es');
  Geocode.enableDebug();

  const address = await Geocode.fromLatLng(lat, lon).then((response) => {
    const address = response.results[0].formatted_address;
    // console.log('현재 주소', address);
    return address.split(' ');
  });

  return address;
};

export default run;
