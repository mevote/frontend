function useAPI() {
  const customFetch = async (url) => {
    try {
      const res = await fetch(url);
      const json = await res.json();
      return json;
    } catch {
      console.log('잘못된 요청 quearyParam을 확인하세요');
    }
  };

  return { customFetch };
}

export default useAPI;
