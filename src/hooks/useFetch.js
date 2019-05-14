import { useEffect, useState } from 'react';
import API from '../api';

function useFetch(methodName, methodParams = [], initialState = []) {
  const [data, setData] = useState(initialState);

  useEffect(() => {
    async function fetchData() {
      const req = await API[methodName](...methodParams);
      await setData(req);
    }

    fetchData();
  }, [methodName, ...methodParams]);

  return data;
}

export default useFetch;
