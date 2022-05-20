import React from 'react';
import styled from '@emotion/styled';
import Header from './Header';
import Map from './Pollscomponent/Map';
import Pollsinfo from './Pollscomponent/Pollsinfo';

//투표소 통합 페이지
//Polls 전체페이지 -> Map(지도), Pollsinfo(투표소정보)
//Pollsbutton 사전투표소 본투표소 전체보기 버튼
//Pollsinfo -> Pollinfo(투표소 하나하나 정보)

const Container = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  max-width: 1020px;
  flex-direction: column;
`;

function Polls() {
    return (
        <Container>
            <Header />
            <Map />
            <Pollsinfo />
        </Container>
    );
}

export default Polls;