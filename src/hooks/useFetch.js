import { useEffect, useState } from 'react';
import API from '../api';

function useFetch(methodName, initialState = []) {
  const [data, setData] = useState(initialState);

  useEffect(() => {
    async function fetchData() {
      const req = await API[methodName]();
      await setData(req);
    }

    fetchData();
  }, [methodName]);

  return data;
}

export default useFetch;
