import Geocode from 'react-geocode';
Geocode.setApiKey('AIzaSyC5xLfDXfz6s9-soQmiQmLHms6QKeXjJ6s');
Geocode.setLanguage('ko');
Geocode.setRegion('es');
Geocode.enableDebug();

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
      lng: position.coords.longitude,
    };
  } else {
    // Geolocation API에 액세스할 수 없으면 서울시청 좌표 리턴
    return {
      lat: 37.5682617,
      lng: 126.9395624,
    };
  }
};

const getAddress = async () => {
  const { lat, lng } = await getCoordinate();

  const address = await Geocode.fromLatLng(lat, lng).then((response) => {
    const x = response.results[0].formatted_address;
    return x.split(' ');
  });
  return address;
};

const getLatLng = async (address) => {
  const latlng = await Geocode.fromAddress(address).then((response) => {
    const { lat, lng } = response.results[0].geometry.location;
    return { lat, lng };
  });
  return latlng;
};

export { getAddress, getCoordinate, getLatLng };
