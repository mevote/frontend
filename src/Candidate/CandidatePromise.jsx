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

// tts service key
// 086659abbee941cda0bb9d7594bc8581

/*
 * api 사이트
 * https://rapidapi.com/voicerss/api/text-to-speech-1/
 * https://www.voicerss.org/api/
 *
 * 자바스크립트 예시 코드
 * https://codepen.io/SitePoint/pen/JRaLVR
 */

/*
async function foo() {
  let url = 'https://api.voicerss.org/?';
  let key = '086659abbee941cda0bb9d7594bc8581';
  let queryParams = encodeURIComponent('key') + '=' + key;
  let str = encodeURIComponent('안녕하세요\n감사합니다.');
  queryParams += '&' + encodeURIComponent('src') + '=' + str;
  queryParams += '&' + encodeURIComponent('hl') + '=' + encodeURIComponent('ko-kr');
  queryParams += '&' + encodeURIComponent('c') + '=' + encodeURIComponent('mp3');

  // let response = await fetch(url + queryParams);
  console.log(url + queryParams);
}
*/

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
