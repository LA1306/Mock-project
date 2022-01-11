/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from 'react';
import api from '../utils/api';
import { ResponseType } from "../types/Api";

function useQuery(url: string) {
  const [data, setData] = useState<ResponseType>({});
  useEffect(() => {
    api('GET', url).then(res => setData(res));
  }, [url]);
  return data;
};

function useMutation(method: string, url: string) {
  const [data, setData] = useState<any>({});
  
  const apiRequest = async (body: any) => {
    const data = await api(method, url, body);
    setData(data);
    return data;
  }
  return [data, apiRequest];
};

const useApi = {
  get: useQuery,
  post: (url: string) => useMutation('POST', url),
  patch: (url: string) => useMutation('PATCH', url),
  delete: (url: string) => useMutation('DELETE', url),
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
