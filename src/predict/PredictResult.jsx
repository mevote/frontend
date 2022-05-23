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
    height: 10vh;
    width: 96%;
    padding-top:20px;
    text-align: center;
    font-size: 30px;
    margin-top: 10px;
    margin-bottom: 10px;
`;

const Result2 = styled.div`
    background: linear-gradient(to right, lightgrey 50%, red 50%);
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
          <TotalResult>홍길동 님의 적중률은 50%입니다.</TotalResult>
          <Result1>
              후보 1 vs 후보 2
          </Result1>
          <Result1>
              후보 1 vs 후보 2
          </Result1>
          <Result2>
              후보 1 vs 후보 2
          </Result2>
          <Result2>
              후보 1 vs 후보 2
          </Result2>
        </Container>        
      );
}
export default Predict;