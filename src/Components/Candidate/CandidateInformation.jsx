import React from 'react';
import styled from '@emotion/styled';
import Header from '../Header';
import { Link } from 'react-router-dom';
import Navigator from '../../Navigator';
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
  margin: 10px;
  border-radius: 15px;
`;

const BriefInformation = styled.div`
  margin: auto;
  padding: 10px 0;
  h2 {
    font-size: 20px;
  }
`;

const DetailedInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 10px;
  justify-content: center;
  border: 1px solid;
  border-radius: 15px;
  padding: 15px;

  h1 {
    font-size: 20px;
  }
`;

// 후보 정보 페이지
const HuboInfo = ({ jd_name, name, birthday, age, addr, edu }) => {
  return (
    <div>
      <BriefInformationContainer>
        <BriefInformation></BriefInformation>
      </BriefInformationContainer>
      <DetailedInformationContainer>
        <Link to="/voice">
          <h1>
            {jd_name} {name}
          </h1>
        </Link>
        <p>생년월일: {birthday}</p>
        <p>연령: {age}</p>
        <p>주소: {addr}</p>
        <p>학력: {edu}</p>
      </DetailedInformationContainer>
    </div>
  );
};

const CandidateInformation = ({ candidates }) => {
  return (
    <Container>
      <Header />
      <Navigator />
      <div>
        {candidates && // 여기서 null 인지 체크합니다.
          candidates.map((candidate) => {
            return (
              <HuboInfo
                key={candidate.NUM}
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

CandidateInformation.propTypes = {
  candidates: PropTypes.array,
};

HuboInfo.propTypes = {
  jd_name: PropTypes.string,
  name: PropTypes.string,
  birthday: PropTypes.string,
  age: PropTypes.string,
  addr: PropTypes.string,
  edu: PropTypes.string,
};

export default CandidateInformation;
