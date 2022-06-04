import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import booth from '../../asset/image/booth.png';

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

function Member({ giho, name, jd_name, age }) {
  return (
    <>
      <Candidate>
        <Column>
          <h1>
            {giho}. {name}
          </h1>
          <p>
            {jd_name} {age}세
          </p>
        </Column>
        <Profile />
      </Candidate>
    </>
  );
}
// - 2번: 국회의원 선거
// - 3번: 시 도지사 선거  // 서울특별시 까지 요청
// - 4번 : 구,시,군의 장 선거 // 서울특별시 마포구 까지 요청
// - 5번 : 시·도의회의원선거 // 서울특별시 마포구 까지 요청, SGG_NAME 추가로 표기(마포구제1선거구)
// - 11번 : 교육감선거   // 서울특별시 까지 요청

function Home({ candidates, num }) {
  let sg_type = [
    null,
    null,
    '국회의원',
    '시 도지사',
    '구,시,군의 장',
    '시·도의회의원',
    null,
    null,
    null,
    null,
    '교육감',
  ];
  sg_type = sg_type[num];
  return (
    <Container>
      <Top>
        <Column>
          <h1>16대 지방선거</h1>
          <h1>사전투표일 5.7~5.28</h1>
          <h1>선거 투표일 6.1</h1>
        </Column>
        <Column>
          <Link to="/polls">
            <img src={booth} width="180" height="180" alt="booth" />
            <p>투표하러가기</p>{' '}
          </Link>
        </Column>
      </Top>
      <Middle>
        <div>
          <h1>마포구</h1>
          <p>
            {sg_type} 선거 후보 {candidates && candidates.length} 명
          </p>
        </div>
      </Middle>
      <Bottom>
        {candidates && // 여기서 null 인지 체크합니다.
          candidates.map((candidate) => {
            return (
              <Member
                key={candidate.NUM}
                giho={candidate.GIHO}
                name={candidate.NAME}
                jd_name={candidate.JD_NAME}
                age={candidate.AGE}
              />
            );
          })}
      </Bottom>
    </Container>
  );
}

Home.propTypes = {
  candidates: PropTypes.array,
  num: PropTypes.number,
};

Member.propTypes = {
  giho: PropTypes.string,
  name: PropTypes.string,
  jd_name: PropTypes.string,
  age: PropTypes.string,
};

export default Home;
