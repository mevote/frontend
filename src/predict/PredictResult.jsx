import React from 'react';
import styled from '@emotion/styled';
import Header from '../Header';
import predicttitle from '../asset/image/predicttitle.jpg'
import Check1 from './Predict';
import Check2 from './Predict';
import Check3 from './Predict';
import Check4 from './Predict';
import Check5 from './Predict';



const TitleImage = styled.div`
    margin-top: 10px;
    display: flex;
`;

const Right1 = () => {
    if(!Check1) {
        document.getElementById("1").innerHTML="예측이 맞았습니다."
    }
    else
    {
        document.getElementById("1").innerHTML="예측이 틀렸습니다."
    }
    document.getElementById("1").style.backgroundColor="lightgrey";
}

const Right2= () => {
    if(!Check2) {
        document.getElementById("2").innerHTML="예측이 맞았습니다."
    }
    else
    {
        document.getElementById("2").innerHTML="예측이 틀렸습니다."
    }
    document.getElementById("2").style.backgroundColor="lightgrey";
}

const Right3 = () => {
    if(Check3) {
        document.getElementById("3").innerHTML="예측이 맞았습니다."
    }
    else
    {
        document.getElementById("3").innerHTML="예측이 틀렸습니다."
    }
    document.getElementById("3").style.backgroundColor="lightgrey";
}

const Right4 = () => {
    if(Check4) {
        document.getElementById("4").innerHTML="예측이 맞았습니다."
    }
    else
    {
        document.getElementById("4").innerHTML="예측이 틀렸습니다."
    }
    document.getElementById("4").style.backgroundColor="lightgrey";
}

const Right5 = () => {
    if(!Check5) {
        document.getElementById("5").innerHTML="예측이 맞았습니다."
    }
    else
    {
        document.getElementById("5").innerHTML="예측이 틀렸습니다."
    }
    document.getElementById("5").style.backgroundColor="lightgrey";
}

var result=0;

const inputResult = () => {
    if(!Check1)
  {
    result++;
  }
  if(!Check2)
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
  if(!Check5)
  {
    result++;
  }
    const perResult = result/5*100
    const str = "홍길동 님의 적중률은 "+perResult+"%입니다."
    document.getElementById("here").innerHTML=str;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 1020px;
  width: 100%;
`;

const TotalResult = styled.div`
    display: flex;
    font-size: 30px;
    font-style: bold;
    padding-top:10px;
    padding-bottom:10px;
    text-align: center;
`;

const Result1 = styled.div`
    background: linear-gradient(to right, darkslateblue 50%, lightgrey 50%);
    height: 7vh;
    width: 96%;
    padding-top:2.3vh;
    padding-bottom:0;
    text-align: center;
    font-size: 30px;
    margin-top: 0;
    margin-bottom: 20px;
`;

const Result2 = styled.div`
    background: linear-gradient(to right, lightgrey 50%, red 50%);
    height: 7vh;
    
    width: 96%;
    padding-top:2.3vh;
    text-align: center;
    font-size: 30px;
    margin-top: 0px;
    margin-bottom: 20px;
`;

const ElectionTitle = styled.div`
    
    font-size: 25px;
    font-weight: bold;
`;




function Predict() {
    return (
        <Container>
          <Header />   
            
          <TitleImage><img src={predicttitle}/></TitleImage>
          <TotalResult id= "here" onClick={inputResult}>자신의 적중률보기</TotalResult>
          <ElectionTitle>서울 시·도지사 선거</ElectionTitle>
          <Result2 id="1" onClick={Right1}>
                기호 1번 송영길 vs 기호 2번 오세훈
          </Result2>
          <ElectionTitle>부산 시·도지사 선거</ElectionTitle>
          <Result2 id="2" onClick={Right2}>
              기호 1번 변성완 vs 기호 2번 박형준
          </Result2>
          <ElectionTitle>경기 시·도지사 선거</ElectionTitle>
          <Result1 id="3" onClick={Right3}>
              기호 1번 김동연 vs 기호 2번 김은혜
          </Result1>
          <ElectionTitle>서울 교육감 선거</ElectionTitle>
          <Result1 id="4" onClick={Right4}>조희연 vs 조전혁</Result1>
          <ElectionTitle>경기 교육감 선거</ElectionTitle>
          <Result2 id="5" onClick={Right5}>
              성기선 vs 임태희
          </Result2>
        </Container>        
      );
}
export default Predict;