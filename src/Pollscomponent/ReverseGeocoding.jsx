import Geocode from 'react-geocode';

// async function ReverseGeocoding() {
//   const url =
//     'https://naveropenapi.apigw.ntruss.com/map-reversegeocode/v2/gc?coords=128.12345,37.98776&output=json&callback=abc';

//   const response = await fetch(url, {
//     method: 'GET',
//     headers: {
//       'X-NCP-APIGW-API-KEY-ID': 'gtabm9kblx',
//       'X-NCP-APIGW-API-KEY': 'd7PSlmQ9SgCKISGeP9fWl7piFkiUmcmp3LhXUGSq',
//       mode: 'cors',
//     },
//   });
//   return response.json();
// }

function ReverseGeocoding() {
  const getLocation = () => {
    let latitude, longitude;
    if (navigator.geolocation) {
      // GPS를 지원하면
      navigator.geolocation.getCurrentPosition(
        function (position) {
          latitude = position.coords.latitude;
          longitude = position.coords.longitude;
          console.log('위도 : ' + latitude + ' 경도 : ' + longitude);
          return { lat: latitude, log: longitude };
        },
        function (error) {
          console.error(error);
        },
        {
          enableHighAccuracy: false,
          maximumAge: 0,
          timeout: Infinity,
        },
      );
    } else {
      alert('GPS를 지원하지 않습니다');
      return;
    }
  };

  const latlog = getLocation();
  console.log(latlog);

  Geocode.setApiKey('AIzaSyC5xLfDXfz6s9-soQmiQmLHms6QKeXjJ6s');
  Geocode.setLanguage('ko');
  Geocode.setRegion('es');
  Geocode.enableDebug();

  Geocode.fromLatLng(latlog.lat, latlog.log).then((response) => {
    const address = response.results[0].formatted_address;
    console.log('현재 주소', address);
  });
}

export default ReverseGeocoding;
