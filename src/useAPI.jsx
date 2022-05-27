function useAPI() {
  const customFetch = async (url) => {
    try {
      const res = await fetch(url);
      const json = await res.json();
      return json;
    } catch {
      console.log('error');
    }
  };

  return { customFetch };
}

export default useAPI;
