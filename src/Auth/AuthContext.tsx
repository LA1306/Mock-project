import React from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthType {
  user: any;
  signIn: (formValues: any, navigateTo: string) => void;
  signOut: () => void;
}
// a postfix ! removes null and undefined from the type
const AuthContext = React.createContext<AuthType>(null!);

export default function ContextProvider(props: any) {
  const navigate = useNavigate();
  const [user, setUser] = React.useState<any>(null);

  const signIn = (formValues: any, navigateTo: string) => {
    setUser(formValues);
    navigate(navigateTo || '/', { replace: true });
  };
  const signOut = () => {
    setUser(null);
    navigate('/');
  };
  const value = { user, signIn, signOut };

  return (
    <AuthContext.Provider value={value}>
      {props.children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return React.useContext(AuthContext);
}
