import React from 'react';
import styled from '@emotion/styled';
import Pollinfo from './Pollinfo';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-contnent: space-between;
`;

function Pollsinfo() {
    return (
        <Container>
            <Pollinfo />
            <Pollinfo />
            <Pollinfo />
        </Container>
    );
}

export default Pollsinfo;