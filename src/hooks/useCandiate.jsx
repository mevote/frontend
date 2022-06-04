import { useEffect, useState } from 'react';
import useAPI from './useAPI';
import getURL from './getURL';
import run from './geocoding';
// - 2번: 국회의원 선거
// - 3번: 시 도지사 선거  // 서울특별시 까지 요청
// - 4번 : 구,시,군의 장 선거 // 서울특별시 마포구 까지 요청
// - 5번 : 시·도의회의원선거 // 서울특별시 마포구 까지 요청, SGG_NAME 추가로 표기(마포구제1선거구)
// - 11번 : 교육감선거   // 서울특별시 까지 요청

function useCandidate(num) {
  const { customFetch } = useAPI();
  const [candidates, setCandidates] = useState();

  useEffect(() => {
    const fetchCandidate = async () => {
      const address = await run();
      const URL = getURL(num, address[1], address[2]);
      const json = await customFetch(URL);
      setCandidates([...json.getPofelcddRegistSttusInfoInqire.item]);
    };
    fetchCandidate();
  }, []);
  return { candidates };
}

export default useCandidate;
