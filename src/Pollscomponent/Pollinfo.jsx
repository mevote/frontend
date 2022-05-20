import React from 'react';
import styled from '@emotion/styled';
import pollexample from '../asset/image/pollexample.png'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-contnent: space-between;
`;

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