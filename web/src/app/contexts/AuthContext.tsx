import { createContext, ReactNode, useCallback, useEffect, useState } from 'react';
import { localStorageKeys } from '../config/localStorageKeys';
import { userService } from '../../services/user/userService';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { SplashScreen } from '../../views/components/SplashScreen';
import { User } from '../types/User';

interface AuthContextValue {
  signedIn: boolean;
  user: User | undefined;
  handleSignIn: (accessToken: string) => void;
  handleSignOut: () => void;
}

interface AuthProviderValue {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextValue);

export function AuthProvider({ children }: AuthProviderValue) {
  const [signedIn, setSignedIn] = useState<boolean>(() => {
    const storedToken = localStorage.getItem(localStorageKeys.ACCESS_TOKEN);
    return !!storedToken;
  });

  const { isError, data, isFetching, isSuccess, remove } = useQuery({
    queryKey: ['users', 'me'],
    queryFn: () => userService.me(),
    enabled: signedIn
  });

  const handleSignIn = useCallback((accessToken: string) => {
    localStorage.setItem(localStorageKeys.ACCESS_TOKEN, accessToken);
    setSignedIn(true);
  }, []);

  const handleSignOut = useCallback(() => {
    localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);
    remove();
    setSignedIn(false);
  }, [remove]);

  useEffect(() => {
    if(isError) {
      toast.error('Sessão expirada! Faça seu login novamente.');
      handleSignOut();
    }
  }, [isError, handleSignOut]);

  return (
    <AuthContext.Provider value={{
      signedIn: isSuccess && signedIn,
      handleSignIn,
      handleSignOut,
      user: data
    }}>
      <SplashScreen isLoading={isFetching} />
      {!isFetching && children}
    </AuthContext.Provider>
  );
}
