import React from 'react';
import { api } from '../shared/utils/api';
import { UserType } from '../shared/types/User';

interface ContextType {
  user?: UserType;
  setUserData: (data: any) => void;
}
// a postfix ! removes null and undefined from the type
const AppContext = React.createContext<ContextType>(null!);

export default function ContextProvider(props: any) {
  const [user, setUser] = React.useState<any>(null);
  const setUserData = (data: any) => setUser(data);
  const contextValue = { user, setUserData };

  React.useEffect(() => {
    api.get('/users/currentUser').then(res => setUser(res.data));
  }, []);

  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return React.useContext(AppContext);
}

/* const login = (userData: any, navigateTo: string) => {
    setUser(userData);
    navigate(navigateTo || '/', { replace: true });
  };
  const value = { user, login, updateUser, logout }; */