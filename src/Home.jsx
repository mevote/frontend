import React from 'react';
import styled from '@emotion/styled';
import Header from './Header';
import booth from './asset/image/booth.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 1020px;
  width: 100%;
`;

const Top = styled.div`
  width: 100%;
  padding: 40px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #f1f1f1;

  h1 {
    font-size: 30px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 60px;
  font-size: 24px;

  p {
    margin-top: 10px;
    text-align: center;
    font-size: 20px;
  }
`;

const Middle = styled.div`
  width: 100%;
  padding: 40px 0px;
  text-align: left;
  line-height: 60px;

  div {
    margin-left: 50px;
  }

  h1 {
    font-size: 42px;
  }

  p {
    font-size: 18px;
  }
`;

const Bottom = styled.div`
  width: 100%;
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
`;

const Candidate = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 40px;
  background-color: #f1f1f1;

  justify-content: space-between;
  align-items: center;

  h1 {
  }

  p {
    color: #595758;
    margin-left: 20px;
  }
`;

const Profile = styled.div`
  width: 80px;
  height: 80px;
  border: 1px solid #595758;
  border-radius: 50%;
`;

function Home() {
  return (
    <Container>
      <Header />
      <Top>
        <Column>
          <h1>16대 지방선거</h1>
          <h1>사전투표일 D-70</h1>
          <h1>선거 투표일 D-15</h1>
        </Column>
        <Column>
          <img src={booth} width="180" height="180" alt="booth" />
          <p>투표하러가기</p>
        </Column>
      </Top>
      <Middle>
        <div>
          <h1>강남구</h1>
          <p> 국회의원 선거 후보 6명</p>
        </div>
      </Middle>
      <Bottom>
        <Candidate>
          <Column>
            <h1>1. 김한규</h1>
            <p> 더불어민주당 45세</p>
          </Column>
          <Profile />
        </Candidate>
        <Candidate>
          <Column>
            <h1>1. 김한규</h1>
            <p> 더불어민주당 45세</p>
          </Column>
          <Profile />
        </Candidate>
        <Candidate>
          <Column>
            <h1>1. 김한규</h1>
            <p> 더불어민주당 45세</p>
          </Column>
          <Profile />
        </Candidate>
        <Candidate>
          <Column>
            <h1>1. 김한규</h1>
            <p> 더불어민주당 45세</p>
          </Column>
          <Profile />
        </Candidate>
        <Candidate>
          <Column>
            <h1>1. 김한규</h1>
            <p> 더불어민주당 45세</p>
          </Column>
          <Profile />
        </Candidate>
      </Bottom>
    </Container>
  );
}

export default Home;
