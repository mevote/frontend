import { SONGU_SERVICE_KEY } from '../keys';

// 이후에 시와 구를 파라미터로 받도록 기능 개선 예정
const getURL = (num, si, gu) => {
  /*
  후보자 정보 조회 API
   - 2번: 국회의원 선거
   - 3번: 시 도지사 선거  // 서울특별시 까지 요청
   - 4번 : 구,시,군의 장 선거 // 서울특별시 마포구 까지 요청
   - 5번 : 시·도의회의원선거 // 서울특별시 마포구 까지 요청, SGG_NAME 추가로 표기(마포구제1선거구)
   - 11번 : 교육감선거   // 서울특별시 까지 요청
  */
  const seoul = si;
  const mapo = gu;

  if (num == 4 || num == 5) {
    let url = 'http://apis.data.go.kr/9760000/PofelcddInfoInqireService/getPofelcddRegistSttusInfoInqire';
    let queryParams = '?' + encodeURIComponent('sgId') + '=' + encodeURIComponent(20220601);
    let serviceKey = SONGU_SERVICE_KEY;
    let si = encodeURIComponent(seoul);
    let gu = encodeURIComponent(mapo);
    queryParams += '&' + encodeURIComponent('sgTypecode') + '=' + encodeURIComponent(num); // 여기 번호를 수정해주면 됩니다.
    queryParams += '&' + encodeURIComponent('sdName') + '=' + si;
    queryParams += '&' + encodeURIComponent('sggName') + '=' + gu;
    queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1');
    queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10');
    queryParams += '&' + encodeURIComponent('resultType') + '=' + encodeURIComponent('json');
    queryParams += '&' + encodeURIComponent('serviceKey') + '=' + serviceKey;

    return url + queryParams;
  } else if (num == 3 || num == 11) {
    let url = 'http://apis.data.go.kr/9760000/PofelcddInfoInqireService/getPofelcddRegistSttusInfoInqire';
    let queryParams = '?' + encodeURIComponent('sgId') + '=' + encodeURIComponent(20220601);
    let serviceKey = SONGU_SERVICE_KEY;
    let si = encodeURIComponent(seoul);
    queryParams += '&' + encodeURIComponent('sgTypecode') + '=' + encodeURIComponent(num); // 여기 번호를 수정해주면 됩니다.
    queryParams += '&' + encodeURIComponent('sdName') + '=' + si;
    queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1');
    queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10');
    queryParams += '&' + encodeURIComponent('resultType') + '=' + encodeURIComponent('json');
    queryParams += '&' + encodeURIComponent('serviceKey') + '=' + serviceKey;

    return url + queryParams;
  } else if (num == 0) {
    let url1 = 'http://apis.data.go.kr/9760000/PolplcInfoInqireService2/getPrePolplcOtlnmapTrnsportInfoInqire';
    let url2 = 'http://apis.data.go.kr/9760000/PolplcInfoInqireService2/getPolplcOtlnmapTrnsportInfoInqire';
    let serviceKey = SONGU_SERVICE_KEY;
    let si = encodeURIComponent(seoul);
    let gu = encodeURIComponent(mapo);

    let queryParams = '?' + encodeURIComponent('serviceKey') + '=' + serviceKey;
    queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1');
    queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10');
    queryParams += '&' + encodeURIComponent('sgId') + '=' + encodeURIComponent('20220601');
    queryParams += '&' + encodeURIComponent('sdName') + '=' + si;
    queryParams += '&' + encodeURIComponent('wiwName') + '=' + gu;
    queryParams += '&' + encodeURIComponent('resultType') + '=' + encodeURIComponent('json');

    return [url1 + queryParams, url2 + queryParams];
  }
};

export default getURL;
