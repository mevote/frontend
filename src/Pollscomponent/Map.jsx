import React from 'react';
import styled from '@emotion/styled';
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from 'react-naver-maps';
//terminal yarn add react-naver-maps 라이브러리 설치


const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-contnent: space-between;
  text-align: center;
`;

//위치정보 받기 -ing
//


//위치정보 요청변수로 해서 사전투표소와 본투표 API 받기 -ing

async function pre_Pollinfo() {
    /*
    // 요청 정보
    // sgid : 선거ID
    // sgName : 시도명
    // wiwName : 위원회명
    */ 
    let url = 'http://apis.data.go.kr/9760000/PolplcInfoInqireService2/getPrePolplcOtlnmapTrnsportInfoInqire';
    let serviceKey =
      'mEgRjbGoszWpu85%2FP4v%2BxYxEx3PyfA2KsFHWTXFaf8xQl3KrxhlGksFJW4SXtGs0u679zXMwOX87GnJKYk4Ukw%3D%3D';
    
    let queryParams = '?' + encodeURIComponent('serviceKey') + '=' + serviceKey;
    queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); 
    queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); 
    queryParams += '&' + encodeURIComponent('sgId') + '=' + encodeURIComponent('20220309'); 
    queryParams += '&' + encodeURIComponent('sdName') + '=' + encodeURIComponent('서울특별시'); 
    queryParams += '&' + encodeURIComponent('wiwName') + '=' + encodeURIComponent('종로구'); 

    url += queryParams;
    let response = await fetch(url);
    if (response.ok) {
      let result = await response.text();
      const parser = new DOMParser();
      const xml = parser.parseFromString(result, 'application/xml');
      console.log(xml);
    } else {
      console.log('fail to load the data');
    }
  }



async function Pollinfo() {
    let url = 'http://apis.data.go.kr/9760000/PolplcInfoInqireService2/getPolplcOtlnmapTrnsportInfoInqire';
    let serviceKey =
      'mEgRjbGoszWpu85%2FP4v%2BxYxEx3PyfA2KsFHWTXFaf8xQl3KrxhlGksFJW4SXtGs0u679zXMwOX87GnJKYk4Ukw%3D%3D';
    let queryParams = '?' + encodeURIComponent('serviceKey') + '=' + serviceKey;
    queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); 
    queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); 
    queryParams += '&' + encodeURIComponent('sgId') + '=' + encodeURIComponent('20220309'); 
    queryParams += '&' + encodeURIComponent('sdName') + '=' + encodeURIComponent('서울특별시'); 
    queryParams += '&' + encodeURIComponent('wiwName') + '=' + encodeURIComponent('종로구'); 

    url += queryParams;
    let response = await fetch(url);
    if (response.ok) {
      let result = await response.text();
      const parser = new DOMParser();
      const xml = parser.parseFromString(result, 'application/xml');
      console.log(xml);
    } else {
      console.log('fail to load the data');
    }
}

//받아온 주소를 위도경도로 변환하기 -ing



//네이버 지도 api에 주소 입력해서 마커찍기 -ing

function NaverMapAPI() {
    const navermaps = window.naver.maps;
    return (
        <NaverMap
            mapDivId={'react-naver-map'}
            style={{
                width: '100%', 
                height: '75vh' 
              }}
            defaultCenter={{ lat: 37.5682617, lng:126.9393624 }} //연세대 위치
            defaultZoom={17}
            minZoom={14}
            maxZoom={20}
            zoomControl={true}
        >
            <Marker
                key = {1}
                position = {new navermaps.LatLng(37.5682617, 126.9393624)}
                animation = {1} // 0 1 2 choice!
                onClick={() => {alert('여기는 대우관입니다.');}}
            />

            <Marker
                key = {2}
                position = {new navermaps.LatLng(37.5682617, 126.9395624)}
                title = {'대우관'}
                animation = {2} // 0 1 2 choice!
                onClick={() => {alert('여기는 대우관입니다.');}}
            />
        </NaverMap>

    );
}



function Mapinfo() {
    return (
        <RenderAfterNavermapsLoaded
            ncpClientId = {'zsnkdm77ah'}
            error={<div>Error!</div>}
            loading={<div>Loading...</div>}>
            <NaverMapAPI />
        </RenderAfterNavermapsLoaded>
    )
}




//출력

function Map() {
    pre_Pollinfo();
    Pollinfo();
    return (
        <Container>
            <Mapinfo />
        </Container>
    );
}

export default Map;