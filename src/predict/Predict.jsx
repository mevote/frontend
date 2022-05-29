import React from 'react';
import styled from '@emotion/styled';
import Header from '../Header';
import predicttitle from '../asset/image/predicttitle.jpg'

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
    margin-top: 10px;
    display: flex;
`;
const ElectionTitle = styled.div`
    
    font-size: 25px;
    font-weight: bold;
`;

const Election = styled.div`
    background-color: lightgrey;
    height: 10vh;
    width: 96%;
    padding-top:0;
    text-align: center;
    font-size: 30px;
    margin-top: 0px;
    margin-bottom: 20px;
`;

const StyledButton = styled.button`
    margin: 0;
    background-color: lightgrey;
    text-align: center;
    width: 47.5%;
    font-size: 30px;
    height: 100%;
    &:hover {background-color: grey;};
    
`;


/*function Button(children) {
    return <StyledButton>{children}</StyledButton>;
}*/

function Predict() {
    return (
        <Container>
          <Header />          
          <TitleImage><img src={predicttitle}/></TitleImage>
          <ElectionTitle>국회의원 선거</ElectionTitle>
          <Election>
            <StyledButton>후보 1</StyledButton> vs <StyledButton>후보 2</StyledButton> 
            </Election>
            <ElectionTitle>시·도지사 선거</ElectionTitle>
          <Election>
              <StyledButton>후보 1</StyledButton> vs <StyledButton>후보 2</StyledButton>
          </Election>
          <ElectionTitle>구·시·군의 장 선거</ElectionTitle>
          <Election>
            <StyledButton>후보 1</StyledButton> vs <StyledButton>후보 2</StyledButton>
          </Election>
          <ElectionTitle>시·도의회의원 선거</ElectionTitle>
          <Election>
            <StyledButton>후보 1</StyledButton> vs <StyledButton>후보 2</StyledButton>
          </Election>
          <ElectionTitle>교육감 선거</ElectionTitle>
          <Election>
            <StyledButton>후보 1</StyledButton> vs <StyledButton>후보 2</StyledButton>
          </Election>
        </Container>        
      );
}
export default Predict;