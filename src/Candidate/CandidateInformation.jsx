import React from 'react';
import styled from '@emotion/styled';
import Header from '../Header';
import Navigator from '../Navigator';

const Container = styled.div`
  display: flex;
  max-width: 1020px;
  flex-direction: column;
  margin: auto;
`;

const BriefInformationContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: 20px;
  margin-right: 20px;
  background-color: rgb(255, 0, 0);
  height: 20vh;
  border-radius: 25px;
`;

const BriefInformation = styled.div`
  margin: auto;
  font-size: 36px;
  color: white;
`;

const CandidatePicture = styled.div`
  margin: auto;
  width: 10em;
  height: 10em;
  border-radius: 50px;
  background-color: White;
`;

const DetailedInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-style: solid;
  margin-left: 20px;
  margin-right: 20px;
  height: 60vh;
  border-radius: 50px;
`;

const DetailedInformation = styled.div`
  font-size: 50px;
  text-align: left;
  margin-left: 40px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

// 후보 정보 페이지

// 선거 코드 정보
async function code_info() {
  /*
   * 알 수 있는 정보 *
   *
   * sgId : 선거Id
   * sgName : 선거명
   * sgTypecode : 선거 종류 코드
   * sgVotedate : 선거 일자
   */
  let url = 'http://apis.data.go.kr/9760000/CommonCodeService/getCommonSgCodeList';
  let serviceKey =
    'fNVaZSTTtInMZqbG%2FJ79DJZf2PWxdOyLsnFdRTD93l8nUnq4PTCu6Oz%2FPb7o2iRN6w%2BvDO34ex%2Bh85ICbUISCg%3D%3D';

  let queryParams = '?' + encodeURIComponent('serviceKey') + '=' + serviceKey;
  queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('8');
  queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10');
  url += queryParams;
  let response = await fetch(url);
  if (response.ok) {
    let result = await response.text();
    const parser = new DOMParser();
    const xml = parser.parseFromString(result, 'application/xml');
    console.log(xml);
    /*
    let election_type = xml.getElementsByTagName('item');
    election_type = [...election_type];
    for (let elem of election_type) {
      console.log(elem);
    }
    */
  } else {
    console.log('fail to load the data');
  }
}

// 후보자 정보
async function candidate_info() {
  /*
   * 요청 정보 *
   *
   * sgTypeCode : 선거 종류 코드
   * sggName : 선거구명
   * sdName : 시도명
   */

  let url = 'http://apis.data.go.kr/9760000/PofelcddInfoInqireService/getPofelcddRegistSttusInfoInqire';
  let serviceKey =
    'fNVaZSTTtInMZqbG%2FJ79DJZf2PWxdOyLsnFdRTD93l8nUnq4PTCu6Oz%2FPb7o2iRN6w%2BvDO34ex%2Bh85ICbUISCg%3D%3D';

  let str1 = encodeURIComponent('서울특별시');
  let str2 = encodeURIComponent('마포구');
  let queryParams = '?' + encodeURIComponent('sgId') + '=' + encodeURIComponent(20220601);
  queryParams += '&' + encodeURIComponent('sgTypecode') + '=' + encodeURIComponent('5');
  queryParams += '&' + encodeURIComponent('sdName') + '=' + str1;
  queryParams += '&' + encodeURIComponent('sggName') + '=' + str2;
  queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1');
  queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10');
  queryParams += '&' + encodeURIComponent('resultType') + '=' + encodeURIComponent('xml');
  queryParams += '&' + encodeURIComponent('serviceKey') + '=' + serviceKey;

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

function CandidateInformation() {
  code_info();
  candidate_info();

  // 사진은 나중에 추가
  return (
    <Container>
      <Header />
      <Navigator />
      <BriefInformationContainer>
        <BriefInformation>
          국민의힘
          <br />
          강득구
          <br />
          비례대표
        </BriefInformation>
        <CandidatePicture>사진</CandidatePicture>
      </BriefInformationContainer>
      <DetailedInformationContainer>
        <DetailedInformation>생년월일: 1999년 9월 9일</DetailedInformation>
        <DetailedInformation>연령: 만 9세</DetailedInformation>
        <DetailedInformation>주소: 서울특별시 강남구 대치2동</DetailedInformation>
        <DetailedInformation>학력: 연세대학교 xx전공</DetailedInformation>
      </DetailedInformationContainer>
    </Container>
  );
}

export default CandidateInformation;
