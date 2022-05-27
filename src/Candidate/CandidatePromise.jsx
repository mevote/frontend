import React from 'react';
import styled from '@emotion/styled';
import Header from '../Header';
import Navigator from '../Navigator';

const Container = styled.div`
  display: flex;
  max-width: 1020px;
  flex-direction: column;
  margin: auto;
`;

// 후보 공약 페이지

function CandidatePromise() {
  return (
    <Container>
      <Header />
      <Navigator />
    </Container>
  );
}

export default CandidatePromise;
