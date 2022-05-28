import { useEffect, useState } from 'react';
import useAPI from './useAPI';

// - 2번: 국회의원 선거
// - 3번: 시 도지사 선거
// - 4번 : 구,시,군의 장 선거
// - 5번 : 시·도의회의원선거
// - 11번 : 교육감선거

function useCandidate() {
  const { customFetch } = useAPI();
  const [candidates, setCandidates] = useState();

  let url = 'http://apis.data.go.kr/9760000/PofelcddInfoInqireService/getPofelcddRegistSttusInfoInqire';
  let serviceKey =
    'fNVaZSTTtInMZqbG%2FJ79DJZf2PWxdOyLsnFdRTD93l8nUnq4PTCu6Oz%2FPb7o2iRN6w%2BvDO34ex%2Bh85ICbUISCg%3D%3D';

  let str1 = encodeURIComponent('서울특별시');
  let str2 = encodeURIComponent('마포구');
  let queryParams = '?' + encodeURIComponent('sgId') + '=' + encodeURIComponent(20220601);
  queryParams += '&' + encodeURIComponent('sgTypecode') + '=' + encodeURIComponent('5'); // 여기 번호를 수정해주면 됩니다.
  queryParams += '&' + encodeURIComponent('sdName') + '=' + str1;
  queryParams += '&' + encodeURIComponent('sggName') + '=' + str2;
  queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1');
  queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10');
  queryParams += '&' + encodeURIComponent('resultType') + '=' + encodeURIComponent('json');
  queryParams += '&' + encodeURIComponent('serviceKey') + '=' + serviceKey;

  useEffect(() => {
    const fetchCandidate = async () => {
      const URL = url + queryParams;
      const json = await customFetch(URL);
      setCandidates([...json.getPofelcddRegistSttusInfoInqire.item]);
    };

    fetchCandidate();
  }, []);

  return { candidates };
}

export default useCandidate;
