import React from 'react';
import styled from '@emotion/styled';
import Header from '../Header';
import Navigator from '../Navigator';
import useCandidate from '../useCandidate';

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

const CandidateInformation = () => {
  const { candidates } = useCandidate();
  console.log(candidates);
  return (
    <Container>
      <Header />
      <Navigator />
      <BriefInformationContainer>
        <BriefInformation>
          국민의 힘 <br /> 홍길동
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
};

export default CandidateInformation;

/*
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

*/
