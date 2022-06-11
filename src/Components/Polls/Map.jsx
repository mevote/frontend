import React from 'react';
import PropTypes from 'prop-types';
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from 'react-naver-maps';

function NaverMapAPI({ latlng, latlngArray }) {
  console.log(latlng);
  console.log(latlngArray);

  const navermaps = window.naver.maps;
  return (
    <NaverMap
      mapDivId={'react-naver-map'}
      style={{
        width: '100%',
        height: '75vh',
      }}
      defaultCenter={latlng} //연세대 위치
      defaultZoom={17}
      minZoom={14}
      maxZoom={20}
      zoomControl={true}>
      {latlngArray &&
        latlngArray.map((latlng, index) => {
          return (
            <Marker
              key={index}
              position={new navermaps.LatLng(latlng)}
              animation={1} // 0 1 2 choice!
              onClick={() => {
                alert('현재 위치.');
              }}
            />
          );
        })}
      <Marker
        key={21}
        position={new navermaps.LatLng(latlng)}
        animation={1} // 0 1 2 choice!
        onClick={() => {
          alert('현재 위치.');
        }}
      />
    </NaverMap>
  );
}

function Map({ latlng, latlngArray }) {
  return (
    <RenderAfterNavermapsLoaded ncpClientId={'zsnkdm77ah'} error={<div>Error!</div>} loading={<div>Loading...</div>}>
      <NaverMapAPI latlng={latlng} latlngArray={latlngArray} />
    </RenderAfterNavermapsLoaded>
  );
}

//출력

export default Map;

NaverMapAPI.propTypes = {
  latlng: PropTypes.object,
  latlngArray: PropTypes.array,
};

Map.propTypes = {
  latlng: PropTypes.object,
  latlngArray: PropTypes.array,
};
