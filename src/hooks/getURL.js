// 이후에 시와 구를 파라미터로 받도록 기능 개선 예정
const getURL = (num) => {
  /*
  후보자 정보 조회 API
   - 2번: 국회의원 선거
   - 3번: 시 도지사 선거  // 서울특별시 까지 요청
   - 4번 : 구,시,군의 장 선거 // 서울특별시 마포구 까지 요청
   - 5번 : 시·도의회의원선거 // 서울특별시 마포구 까지 요청, SGG_NAME 추가로 표기(마포구제1선거구)
   - 11번 : 교육감선거   // 서울특별시 까지 요청
  */
  if (num == 4 || num == 5) {
    let url = 'http://apis.data.go.kr/9760000/PofelcddInfoInqireService/getPofelcddRegistSttusInfoInqire';
    let queryParams = '?' + encodeURIComponent('sgId') + '=' + encodeURIComponent(20220601);
    let serviceKey =
      'fNVaZSTTtInMZqbG%2FJ79DJZf2PWxdOyLsnFdRTD93l8nUnq4PTCu6Oz%2FPb7o2iRN6w%2BvDO34ex%2Bh85ICbUISCg%3D%3D';
    let si = encodeURIComponent('서울특별시');
    let gu = encodeURIComponent('마포구');
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
    let serviceKey =
      'fNVaZSTTtInMZqbG%2FJ79DJZf2PWxdOyLsnFdRTD93l8nUnq4PTCu6Oz%2FPb7o2iRN6w%2BvDO34ex%2Bh85ICbUISCg%3D%3D';

    let si = encodeURIComponent('서울특별시');
    queryParams += '&' + encodeURIComponent('sgTypecode') + '=' + encodeURIComponent(num); // 여기 번호를 수정해주면 됩니다.
    queryParams += '&' + encodeURIComponent('sdName') + '=' + si;
    queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1');
    queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10');
    queryParams += '&' + encodeURIComponent('resultType') + '=' + encodeURIComponent('json');
    queryParams += '&' + encodeURIComponent('serviceKey') + '=' + serviceKey;

    return url + queryParams;
  }
};

export default getURL;
