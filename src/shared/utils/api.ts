const baseUrl = 'http://localhost:4000';

/* const apiGet = async (url: string) => {
  url = baseUrl + url;
  const response = await fetch(url);
  const data = await response.json();
  return data;
} */

async function api(method: string, url: string, body?: any) {
  url = baseUrl + url;
  const options = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  }
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  }
  catch(err) {
    console.log(err);
    return null;
  }
}

/* const Api = {
  get: apiGet,
  post: (url: string, body: any) => api('post', url, body),
  put: (url: string, body: any) => api('put', url, body),
} */

export default api;
