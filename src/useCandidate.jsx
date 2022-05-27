import { useState, useEffect } from 'react';
import XMLParser from 'react-xml-parser';

function useCandidate() {
  const [state, setState] = useState();

  useEffect(() => {
    let url = 'http://apis.data.go.kr/9760000/PofelcddInfoInqireService/getPofelcddRegistSttusInfoInqire';
    let serviceKey =
      'fNVaZSTTtInMZqbG%2FJ79DJZf2PWxdOyLsnFdRTD93l8nUnq4PTCu6Oz%2FPb7o2iRN6w%2BvDO34ex%2Bh85ICbUISCg%3D%3D';

    let str1 = encodeURIComponent('서울특별시');
    let str2 = encodeURIComponent('마포구');
    let queryParams = '?' + encodeURIComponent('sgId') + '=' + encodeURIComponent(20220601);
    queryParams += '&' + encodeURIComponent('sgTypecode') + '=' + encodeURIComponent('5');
    queryParams += '&' + encodeURIComponent('sdName') + '=' + str1;
    queryParams += '&' + encodeURIComponent('sggName') + '=' + str2;
    queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1');
    queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10');
    queryParams += '&' + encodeURIComponent('resultType') + '=' + encodeURIComponent('xml');
    queryParams += '&' + encodeURIComponent('serviceKey') + '=' + serviceKey;

    fetch(url + queryParams)
      .then((res) => res.text())
      .then((data) => {
        var xml = new XMLParser().parseFromString(data);
        setState(xml.children[1].children[0].children);
      })
      .catch((err) => console.log(err));
  }, []);

  return { state };
}

export default useCandidate;
