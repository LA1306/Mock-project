export const getStoredAuthToken = () => localStorage.getItem('authToken');

export const storeAuthToken = (token: any) => localStorage.setItem('authToken', token);

export const removeStoredAuthToken = () => localStorage.removeItem('authToken');
