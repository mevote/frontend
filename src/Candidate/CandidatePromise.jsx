import React from 'react';
import styled from '@emotion/styled';
import Header from '../Header';
import Navigator from '../Navigator';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  max-width: 1020px;
  flex-direction: column;
  margin: auto;
`;

const DetailedPromise = styled.div`
  font-size: 20px;
  text-align: left;
  margin-left: 40px;
  margin-top: 20px;
  margin-bottom: 20px;
  white-space: pre-wrap;
`;

// 후보 공약 페이지

const HuboInfo = ({ p1, p2, p3, p4, p5 }) => {
  return (
    <div>
      <DetailedPromise>{p1}</DetailedPromise>
      <DetailedPromise>{p2}</DetailedPromise>
      <DetailedPromise>{p3}</DetailedPromise>
      <DetailedPromise>{p4}</DetailedPromise>
      <DetailedPromise>{p5}</DetailedPromise>
    </div>
  );
};

function CandidatePromise({ candidates }) {
  return (
    <Container>
      <Header />
      <Navigator />
      <div>
        {candidates && // 여기서 null 인지 체크합니다.
          candidates.map((candidate) => {
            return (
              <HuboInfo
                key={candidate}
                p1={candidate.prmmCont1}
                p2={candidate.prmmCont3}
                p3={candidate.prmmCont3}
                p4={candidate.prmmCont4}
                p5={candidate.prmmCont5}
              />
            );
          })}
      </div>
    </Container>
  );
}

CandidatePromise.propTypes = {
  candidates: PropTypes.array,
};

HuboInfo.propTypes = {
  p1: PropTypes.string,
  p2: PropTypes.string,
  p3: PropTypes.string,
  p4: PropTypes.string,
  p5: PropTypes.string,
};

export default CandidatePromise;
