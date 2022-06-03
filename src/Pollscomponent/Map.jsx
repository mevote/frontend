import React from 'react';
import styled from '@emotion/styled';
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from 'react-naver-maps';
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-contnent: space-between;
  text-align: center;
`;

function NaverMapAPI() {
  const navermaps = window.naver.maps;
  return (
    <NaverMap
      mapDivId={'react-naver-map'}
      style={{
        width: '100%',
        height: '75vh',
      }}
      defaultCenter={{ lat: 37.5682617, lng: 126.9393624 }} //연세대 위치
      defaultZoom={17}
      minZoom={14}
      maxZoom={20}
      zoomControl={true}>
      <Marker
        key={1}
        position={new navermaps.LatLng(37.5682617, 126.9393624)}
        animation={1} // 0 1 2 choice!
        onClick={() => {
          alert('여기는 대우관입니다.');
        }}
      />

      <Marker
        key={2}
        position={new navermaps.LatLng(37.5682617, 126.9395624)}
        title={'대우관'}
        animation={2} // 0 1 2 choice!
        onClick={() => {
          alert('여기는 대우관입니다.');
        }}
      />
    </NaverMap>
  );
}

function Mapinfo() {
  return (
    <RenderAfterNavermapsLoaded
      ncpClientId={'zsnkdm77ah'}
      error={<div>Error!</div>}
      loading={<div>Loading...</div>}
      submodules={['geocoder']}>
      <NaverMapAPI />
    </RenderAfterNavermapsLoaded>
  );
}

//출력

function Map() {
  return (
    <Container>
      <Mapinfo />
    </Container>
  );
}

export default Map;
