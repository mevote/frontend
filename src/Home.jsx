import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Header from './Header';
import booth from './asset/image/booth.png';
import useCandidate from './useCandidate';

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

function Member({ giho, name, jDName, age }) {
  return (
    <Candidate>
      <Column>
        <h1>
          {giho}. {name}
        </h1>
        <p>
          {' '}
          {jDName} {age}세
        </p>
      </Column>
      <Profile />
    </Candidate>
  );
}

function Home() {
  const candidate = useCandidate();

  setTimeout(() => {
    console.log(candidate.state.candidates[0].name.value);

    candidate.state.candidates.forEach((element) => {
      console.log(element.name.value);
    });
  });

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
          <h1>마포구</h1>
          <p> 국회의원 선거 후보 {candidate.state.total}명</p>
        </div>
      </Middle>
      <Bottom>
        <Candidate>
          <Column>
            <h1>1. {candidate.state.candidates[0].name.value}</h1>
            <p>
              {candidate.state.candidates[0].jDName.value} {candidate.state.candidates[0].age.value}세
            </p>
          </Column>
          <Profile />
        </Candidate>
      </Bottom>
    </Container>
  );
}

Member.propTypes = {
  giho: PropTypes.giho,
  name: PropTypes.string,
  jDName: PropTypes.string,
  age: PropTypes.number,
};

export default Home;
