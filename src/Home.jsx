import React from 'react';
import styled from '@emotion/styled';
import Header from './Header';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 1020px;
`;

function Home() {
  return (
    <Container>
      <Header />
      <div>
        <h1>안녕하세요 여기는 h1입니다</h1>
        <p>안녕하세요 여기는 p입니다.</p>
      </div>
    </Container>
  );
}

export default Home;
