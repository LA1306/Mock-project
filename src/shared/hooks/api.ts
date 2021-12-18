import { useState, useEffect } from 'react';
import api from '../utils/api';

function useApiGet(url: string) {
  const [data, setData] = useState<any>(null);  // null = un-fetch
  useEffect(() => {
    api.get(url).then(res => {
      setData(res);
    }).catch(err => {
      console.log(err);
    })
  }, [url]);
  return data;
};

function useApiPost(url: string) {
  const [data, setData] = useState<any>(null);  // null = un-fetch
  
  const apiPost = (body: any) => {
    api.post(url, body).then(res => {
      setData(res);
    }).catch(err => {
      console.log(err);
    })
  }
  return { data, apiPost };
};

const useApi = {
  get: useApiGet,
  post: useApiPost,
}

export default useApi;

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
