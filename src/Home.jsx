import React from 'react';
import styled from '@emotion/styled';
import Header from './Header';

const Container = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  max-width: 1020px;
`;

function Home() {
  return (
    <Container>
      <Header />
    </Container>
  );
}

export default Home;
