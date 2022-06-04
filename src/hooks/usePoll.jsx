import { useEffect, useState } from 'react';
import getURL from './getURL';
import useAPI from './useAPI';
import { run } from './geocoding';

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

  useEffect(() => {
    const fetchPrePolls = async () => {
      const address = await run();
      const URL = getURL(0, address[1], address[2]);
      const json = await customFetch(URL[0]);
      setPrePolls([...json.getPrePolplcOtlnmapTrnsportInfoInqire.item]);
    };

    const fetchMainPolls = async () => {
      const address = await run();
      const URL = getURL(0, address[1], address[2]);
      const json = await customFetch(URL[1]);
      setMainPolls([...json.getPolplcOtlnmapTrnsportInfoInqire.item]);
    };

    fetchPrePolls();
    fetchMainPolls();
  }, []);

  return { prePolls, mainPolls };
}

export default usePolls;
