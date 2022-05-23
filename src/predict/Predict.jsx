import React from 'react';
import styled from '@emotion/styled';
import Header from '../Header';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 1020px;
  width: 100%;
`;

const TitleImage = styled.div`
    display: flex;
`;

const Election = styled.div`
    background-color: lightgrey;
    height: 10vh;
    width: 96%;
    padding-top:20px;
    text-align: center;
    font-size: 30px;
    margin-top: 10px;
    margin-bottom: 10px;
`;

function Predict() {
    return (
        <Container>
          <Header />          
          <TitleImage>사진</TitleImage>
          <Election>
              후보 1 vs 후보 2
          </Election>
          <Election>
              후보 1 vs 후보 2
          </Election>
          <Election>
              후보 1 vs 후보 2
          </Election>
          <Election>
              후보 1 vs 후보 2
          </Election>
        </Container>        
      );
}
export default Predict;