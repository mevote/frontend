import React from 'react';
import styled from '@emotion/styled';
import Header from './Header';
import Navigator from './Navigator';

const Container = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  max-width: 1020px;
  flex-direction: column;
`;

// 후보 공약 페이지

function Candidate() {
  return (
    <Container>
      <Header />
      <Navigator />
    </Container>
  );
}

export default Candidate;
