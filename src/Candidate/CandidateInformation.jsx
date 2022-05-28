import React from 'react';
import styled from '@emotion/styled';
import Header from '../Header';
import Navigator from '../Navigator';
import useCandidate from '../useCandidate';
import PropTypes from 'prop-types';

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

const huboInfo = ({ jd_name, name, birthday, age, addr, edu }) => {
  return (
    <div>
      <BriefInformationContainer>
        <BriefInformation>
          {jd_name} <br /> {name}
        </BriefInformation>
      </BriefInformationContainer>
      <CandidatePicture>사진</CandidatePicture>
      <DetailedInformationContainer>
        <DetailedInformation>생년월일: {birthday}</DetailedInformation>
        <DetailedInformation>연령: {age}</DetailedInformation>
        <DetailedInformation>주소: {addr}</DetailedInformation>
        <DetailedInformation>학력: {edu}</DetailedInformation>
      </DetailedInformationContainer>
    </div>
  );
};

const CandidateInformation = () => {
  const { candidates } = useCandidate();
  console.log(candidates);
  return (
    <Container>
      <Header />
      <Navigator />
      <div>
        {candidates && // 여기서 null 인지 체크합니다.
          candidates.map((candidate) => {
            return (
              <huboInfo
                key={candidate.JD_NAME}
                jd_name={candidate.JD_NAME}
                name={candidate.NAME}
                birthday={candidate.BIRTHDAY}
                age={candidate.AGE}
                addr={candidate.ADDR}
                edu={candidate.EDU}
              />
            );
          })}
      </div>
    </Container>
  );
};

export default CandidateInformation;

CandidateInformation.propTypes = {
  candidates: PropTypes.array,
};

huboInfo.propTypes = {
  jd_name: PropTypes.string,
  name: PropTypes.string,
  birthday: PropTypes.string,
  age: PropTypes.string,
  addr: PropTypes.string,
  edu: PropTypes.string,
};
