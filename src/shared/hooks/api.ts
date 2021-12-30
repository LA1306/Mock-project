/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from 'react';
import api from '../utils/api';

function useApiGet(url: string) {
  const [data, setData] = useState<any>(null);  // null = un-fetch
  useEffect(() => {
    api('GET', url).then(res => {
      setData(res);
    }).catch(err => {
      console.log(err);
    })
  }, [url]);
  return data;
};

function useApi(method: string, url: string) {
  const [data, setData] = useState<any>(null);  // null = un-fetch
  
  const apiRequest = async (body: any) => {
    const data = await api(method, url, body);
    setData(data);
    return data;
  }
  return [data, apiRequest];
};

const Api = {
  get: useApiGet,
  post: (url: string) => useApi('POST', url),
  put: (url: string) => useApi('PUT', url),
  patch: (url: string) => useApi('PATCH', url),
  delete: (url: string) => useApi('DELETE', url),
}

export default Api;

/* don't work
function useApiGet<T>(url: string) {
  let data: T = {};

  useEffect(() => {
    if (!url) return;
    const fetchData = async () => {
      data = await api.get(url);
    };
    fetchData();
  }, [url]);

  return { status: 'test', data };
}; */
