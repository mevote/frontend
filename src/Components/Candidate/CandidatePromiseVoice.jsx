import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Header from '../Header';
import Navigator from '../../Navigator';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  max-width: 1020px;
  flex-direction: column;
  margin: auto;
`;

const PlayButton = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
  background-color: rgb(120, 120, 120);
  border-radius: 15px;
  height: 90px;
  color: white;
  justify-content: center;
`;

function getURL(str) {
  let url = 'https://api.voicerss.org/?';
  let key = '086659abbee941cda0bb9d7594bc8581';
  let queryParams = encodeURIComponent('key') + '=' + key;
  let encode_str = encodeURIComponent(str);
  queryParams += '&' + encodeURIComponent('src') + '=' + encode_str;
  queryParams += '&' + encodeURIComponent('hl') + '=' + encodeURIComponent('ko-kr');
  queryParams += '&' + encodeURIComponent('c') + '=' + encodeURIComponent('mp3');
  return url + queryParams;
}

const useAudio = (url) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Player = ({ url }) => {
  const [playing, toggle] = useAudio(url);

  return (
    <div>
      <PlayButton>
        <button onClick={toggle}>{playing ? 'Pause' : 'Play'}</button>
      </PlayButton>
    </div>
  );
};

const HuboInfo = ({ p1, p2, p3, p4, p5 }) => {
  let URL1 = getURL(p1.slice(0, 290));
  const URL2 = getURL(p2.slice(0, 290));
  const URL3 = getURL(p3.slice(0, 290));
  const URL4 = getURL(p4.slice(0, 290));
  const URL5 = getURL(p5.slice(0, 290));

  return (
    <div>
      <p>공약1</p>
      <Player url={URL1}></Player>
      <p>공약2</p>
      <Player url={URL2}></Player>
      <p>공약3</p>
      <Player url={URL3}></Player>
      <p>공약4</p>
      <Player url={URL4}></Player>
      <p>공약5</p>
      <Player url={URL5}></Player>
    </div>
  );
};

function CandidatePromiseVoice() {
  const { toggle } = useAudio();
  return (
    <Container>
      <Header />
      <Navigator />
      <div>
        <button onClick={toggle}>공약 음성으로 듣기</button>
      </div>
    </Container>
  );
}

CandidatePromiseVoice.propTypes = {
  candidates: PropTypes.array,
};

HuboInfo.propTypes = {
  p1: PropTypes.string,
  p2: PropTypes.string,
  p3: PropTypes.string,
  p4: PropTypes.string,
  p5: PropTypes.string,
};

Player.propTypes = {
  url: PropTypes.string,
};

export default CandidatePromiseVoice;

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
  console.log(url + queryParams);   // 이 주소로 들어가면 음성이 나온다.
}
*/
