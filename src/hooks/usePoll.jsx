import { useEffect, useState } from 'react';
import useAPI from './useAPI';
/*
  요청 정보
  sgid : 선거ID
  sgName : 시도명
  wiwName : 위원회명
*/

function usePolls() {
  const { customFetch } = useAPI();
  const [prePolls, setPrePolls] = useState();
  const [mainPolls, setMainPolls] = useState();

  let url = 'http://apis.data.go.kr/9760000/PolplcInfoInqireService2/getPrePolplcOtlnmapTrnsportInfoInqire';
  let url2 = 'http://apis.data.go.kr/9760000/PolplcInfoInqireService2/getPolplcOtlnmapTrnsportInfoInqire';
  let serviceKey = 'mEgRjbGoszWpu85%2FP4v%2BxYxEx3PyfA2KsFHWTXFaf8xQl3KrxhlGksFJW4SXtGs0u679zXMwOX87GnJKYk4Ukw%3D%3D';

  let queryParams = '?' + encodeURIComponent('serviceKey') + '=' + serviceKey;
  queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1');
  queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10');
  queryParams += '&' + encodeURIComponent('sgId') + '=' + encodeURIComponent('20220601');
  queryParams += '&' + encodeURIComponent('sdName') + '=' + encodeURIComponent('서울특별시');
  queryParams += '&' + encodeURIComponent('wiwName') + '=' + encodeURIComponent('마포구');
  queryParams += '&' + encodeURIComponent('resultType') + '=' + encodeURIComponent('json');

  useEffect(() => {
    const fetchPrePolls = async () => {
      const URL = url + queryParams;
      const json = await customFetch(URL);
      setPrePolls([...json.getPrePolplcOtlnmapTrnsportInfoInqire.item]);
    };

    const fetchMainPolls = async () => {
      const URL = url2 + queryParams;
      const json = await customFetch(URL);
      console.log(json);
      setMainPolls([...json.getPolplcOtlnmapTrnsportInfoInqire.item]);
    };

    fetchPrePolls();
    fetchMainPolls();
  }, []);

  return { prePolls, mainPolls };
}

export default usePolls;
