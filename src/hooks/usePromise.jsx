import { useEffect, useState } from 'react';
import useAPI from './useAPI';
import { SONGU_SERVICE_KEY } from '../keys';
// - 2번: 국회의원 선거
// - 3번: 시 도지사 선거
// - 4번 : 구,시,군의 장 선거
// - 5번 : 시·도의회의원선거
// - 11번 : 교육감선거

// 선거 공약 정보를 가져오는 api입니다.
// 3,4,11 번 코드만 공약을 가져올 수 있다.

function usePromise() {
  const { customFetch } = useAPI();
  const [candidates, setCandidates] = useState();

  let url = 'http://apis.data.go.kr/9760000/ElecPrmsInfoInqireService/getCnddtElecPrmsInfoInqire';
  let serviceKey = SONGU_SERVICE_KEY;

  let str1 = encodeURIComponent('서울특별시');
  let str2 = encodeURIComponent('마포구');
  let queryParams = '?' + encodeURIComponent('sgId') + '=' + encodeURIComponent(20220601);
  queryParams += '&' + encodeURIComponent('sgTypecode') + '=' + encodeURIComponent('3'); // 여기 번호를 수정해주면 됩니다.
  queryParams += '&' + encodeURIComponent('sdName') + '=' + str1;
  queryParams += '&' + encodeURIComponent('sggName') + '=' + str2;
  queryParams += '&' + encodeURIComponent('resultType') + '=' + encodeURIComponent('json');
  queryParams += '&' + encodeURIComponent('cnddtId') + '=' + encodeURIComponent('100149260'); // 각 후보의 HUBOID
  queryParams += '&' + encodeURIComponent('serviceKey') + '=' + serviceKey;

  useEffect(() => {
    const fetchCandidate = async () => {
      const URL = url + queryParams;
      const json = await customFetch(URL);
      setCandidates([...json.getCnddtElecPrmsInfoInqire.item]);
    };

    fetchCandidate();
  }, []);

  return { candidates };
}

export default usePromise;
