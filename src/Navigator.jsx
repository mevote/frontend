import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-contnent: space-between;
  height: 8vh;
`;

const Information = styled.div`
  background-color: rgb(230, 230, 230);
  font-size: 24px;
  text-align: center;
  width: 50%;
  line-height: 8vh;
`;

function Navigator() {
  return (
    <Container>
      <Information>후보 정보</Information>
      <Information>후보 공약</Information>
    </Container>
  );
}

export default Navigator;
