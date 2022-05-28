import React from 'react';
import styled from '@emotion/styled';
import pollexample from '../asset/image/pollexample.png'


const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-contnent: space-between;
`;

//위치정보 요청변수로 해서 사전투표소와 본투표 API 받아서 css 출력 -ing

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

async function main_Pollinfo() {
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


function PollAPI() {
  pre_Pollinfo();
  main_Pollinfo();
}



//받아온 정보 컴포넌트화 -ing








function Pollinfo() {
    PollAPI();

    return (
        <Container>
            <div>
                <div>투표소 1</div>
                <img src={pollexample} alt="Poll"/>
            </div>
        </Container>
    )
}

export default Pollinfo;