import React from 'react';
import styled from '@emotion/styled';
import pollexample from '../asset/image/pollexample.png'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-contnent: space-between;
`;

//위치정보 요청변수로 해서 사전투표소와 본투표 API 받아서 css 출력 -ing

function Pollinfo() {
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