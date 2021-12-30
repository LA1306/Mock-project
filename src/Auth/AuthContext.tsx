import React from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthType {
  user?: { [key: string]: string };
  login: (userData: any, navigateTo: string) => void;
  updateUser: (userData: any) => void;
  logout: () => void;
}
// a postfix ! removes null and undefined from the type
const AuthContext = React.createContext<AuthType>(null!);

export default function ContextProvider(props: any) {
  const navigate = useNavigate();
  const [user, setUser] = React.useState<any>(null);

  const login = (userData: any, navigateTo: string) => {
    setUser(userData);
    navigate(navigateTo || '/', { replace: true });
  };

  const updateUser = (userData: any) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
    navigate('/');
  };

  const value = { user, login, updateUser, logout };

  return (
    <AuthContext.Provider value={value}>
      {props.children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return React.useContext(AuthContext);
}
