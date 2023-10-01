import { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import { localStorageKeys } from "../config/localStorageKeys";
import { userService } from "../../services/user/userService";
import { toast } from "react-hot-toast";

interface AuthContextValue {
  signedIn: boolean;
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
    return !!storedToken
  });

  const handleSignIn = useCallback((accessToken: string) => {
    localStorage.setItem(localStorageKeys.ACCESS_TOKEN, accessToken);
    setSignedIn(true)
  }, [])

  const handleSignOut = useCallback(() => {
    localStorage.removeItem(localStorageKeys.ACCESS_TOKEN)
    setSignedIn(false);
  }, [])

  useEffect(() => {
    const storedToken = localStorage.getItem(localStorageKeys.ACCESS_TOKEN);

    if(!storedToken) return;

    userService.me(storedToken)
    .then(() => {
      setSignedIn(true);
    })
    .catch(error => {
      console.error(error)
      handleSignOut()
      toast.error('Sessão expirada, faça seu login novamente.')
    })

  }, [handleSignOut])

  return (
    <AuthContext.Provider value={{
      signedIn,
      handleSignIn,
      handleSignOut,
    }}>
      {children}
    </AuthContext.Provider>
  )
}
