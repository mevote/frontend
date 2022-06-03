import React from 'react';
import useCandidate from '../hooks/useCandiate';
import Header from '../Header';
import Home from '../Home';
// - 2번: 국회의원 선거
// - 3번: 시 도지사 선거  // 서울특별시 까지 요청
// - 4번 : 구,시,군의 장 선거 // 서울특별시 마포구 까지 요청
// - 5번 : 시·도의회의원선거 // 서울특별시 마포구 까지 요청, SGG_NAME 추가로 표기(마포구제1선거구)
// - 11번 : 교육감선거   // 서울특별시 까지 요청

function HomePage() {
  const { candidates } = useCandidate(4);
  return (
    <>
      <Header />
      <Home candidates={candidates} num={4} />;
    </>
  );
}

export default HomePage;
