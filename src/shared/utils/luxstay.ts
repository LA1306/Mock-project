const baseUrl = 'https://cdn.luxstay.com';

export function imageUrl(url: string) {
  if (url.charAt(0) === '/') {
    return baseUrl + url;
  }
  return baseUrl + '/' + url;
}