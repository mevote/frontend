import React from 'react';
import PropTypes from 'prop-types';
import { RenderAfterNavermapsLoaded, NaverMap } from 'react-naver-maps';

function NaverMapAPI({ latlng }) {
  console.log(latlng);
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
      zoomControl={true}></NaverMap>
  );
}

function Map({ latlng }) {
  console.log(latlng);
  return (
    <RenderAfterNavermapsLoaded ncpClientId={'zsnkdm77ah'} error={<div>Error!</div>} loading={<div>Loading...</div>}>
      <NaverMapAPI latlng={latlng} />
    </RenderAfterNavermapsLoaded>
  );
}

//출력

export default Map;

NaverMapAPI.propTypes = {
  latlng: PropTypes.object,
};

Map.propTypes = {
  latlng: PropTypes.object,
};
