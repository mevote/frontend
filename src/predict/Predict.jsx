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
    text-align: center;
    width: 47.5%;
    font-size: 30px;
    height: 100%;
    background-color: lightgrey;
    &:hover {background-color: grey;}
    
`;

const StyledButton2 = styled.button`
    margin: 0;
    text-align: center;
    width: 47.5%;
    font-size: 20px;
    height: 100%;
    background-color: lightgrey;
    
    
`;


var Check1 = false;
var Check2 = false;
var Check3 = false;
var Check4 = false;
var Check5 = false;
var result = 0;

const funResult = () => {
  if(Check1)
  {
    result++;
  }
  if(Check2)
  {
    result++;
  }
  if(Check3)
  {
    result++;
  }
  if(Check4)
  {
    result++;
  }
  if(Check5)
  {
    result++;
  }
  const str="홍길동님의 적중률은 "+(result/5)*100+"% 입니다."
  window.alert(str);
  result = 0;
}

const funCheck1 = () => {
  Check1 = true;
  
}

const funCheck12 = () => {
  Check1 = false;
  
}

const funCheck2 = () => {
  Check2 = true;
  
}

const funCheck22 = () => {
  Check2 = false;
  
}

const funCheck3 = () => {
  Check3 = true;
  
}

const funCheck32 = () => {
  Check3 = false;
  
}

const funCheck4 = () => {
  Check4 = true;
  
}

const funCheck42 = () => {
  Check3 = false;
  
}

const funCheck5 = () => {
  Check5 = true;
  
}

const funCheck52 = () => {
  Check5 = false;
  
}


/*function Button(children) {
    return <StyledButton>{children}</StyledButton>;
}*/

function Predict() {
    
    return (
        <Container>
          <Header />          
          <TitleImage><img src={predicttitle}/></TitleImage>
          <ElectionTitle>서울 시·도지사 선거</ElectionTitle>
          <Election>
            <StyledButton onClick={funCheck1}>기호 1번 송영길</StyledButton> vs <StyledButton onClick={funCheck12}>기호 2번 오세훈</StyledButton> 
            </Election>            
            <ElectionTitle>부산 시·도지사 선거</ElectionTitle>
          <Election>
              <StyledButton onClick={funCheck2}>기호 1번 변성완</StyledButton> vs <StyledButton onClick={funCheck22}>기호 2번 박형준</StyledButton>
          </Election>
          <ElectionTitle>경기 시·도지사 선거</ElectionTitle>
          <Election>
            <StyledButton onClick={funCheck3}>기호 1번 김동연</StyledButton> vs <StyledButton onClick={funCheck32}>기호 2번 김은혜</StyledButton>
          </Election>
          <ElectionTitle>서울시 교육감 선거</ElectionTitle>
          <Election>
            <StyledButton  onClick={funCheck4}>조희연</StyledButton> vs <StyledButton  onClick={funCheck42}>박선영</StyledButton>
          </Election>
          <ElectionTitle>경기 교육감 선거</ElectionTitle>
          <Election>
            <StyledButton  onClick={funCheck5}>성기선</StyledButton> vs <StyledButton  onClick={funCheck52}>임태희</StyledButton>
          </Election>
            <StyledButton2 onClick={funResult}>결과 보기</StyledButton2>
        </Container>  

        
      );
}
export default Predict;
