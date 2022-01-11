import { getStoredAuthToken } from "./authToken";
import { ResponseType } from "../types/Api";

const baseUrl = 'http://localhost:5000/api';

async function fetchApi(method: string, url: string, body?: any) {
  url = baseUrl + url;
  const token = getStoredAuthToken();
  const options: any = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : undefined,
    },
    body: body ? JSON.stringify(body) : undefined,
  }
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data as ResponseType;
  }
  catch(error) {
    return error as ResponseType;
  }
}

export const api = {
  get: (url: string) => fetchApi('GET', url),
  post: (url: string, body: any) => fetchApi('POST', url, body),
  patch: (url: string, body: any) => fetchApi('PATCH', url, body),
}

export default fetchApi;
