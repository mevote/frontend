import { useEffect, useState } from 'react';
import getURL from './getURL';
import useAPI from './useAPI';
import { getAddress, getLatLng } from './geocoding';

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
  const [latlngArray, setLatLngArray] = useState([]);

  const fetchData = async () => {
    const address = await getAddress();
    const lat0 = await getLatLng('서울특별시 마포구 만리재옛길 84 (공덕동)');
    const lat1 = await getLatLng('서울특별시 마포구 마포대로7길 18 (공덕동)');
    const lat2 = await getLatLng('서울특별시 마포구 도화길 37 (도화동)');

    const URL = getURL(0, address[1], address[2]);
    const json1 = await customFetch(URL[0]);
    const json2 = await customFetch(URL[1]);

    setLatLngArray([lat0, lat1, lat2]);
    setPrePolls([...json1.getPrePolplcOtlnmapTrnsportInfoInqire.item]);
    setMainPolls([...json2.getPolplcOtlnmapTrnsportInfoInqire.item]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { latlngArray, prePolls, mainPolls };
}

export default usePolls;
