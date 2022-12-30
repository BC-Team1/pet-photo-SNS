import { ReactNode, createContext, useState, useContext, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import type { User } from 'firebase/auth';
import { useRouter } from 'next/router';
import { app } from './firebase';

export type UserType = User | null;

export type AuthContextProps = {
  user: UserType;
};

export type AuthProps = {
  children: ReactNode;
};

const AuthContext = createContext<Partial<AuthContextProps>>({});

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: AuthProps) => {
  const router = useRouter();
  const auth = getAuth(app);
  const [user, setUser] = useState<UserType>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const isAvailableForViewing =
    router.pathname === "/" ||
    router.pathname === "/signin" ||
    router.pathname === "/signup" ||
    router.pathname === "/mypage" ||
    router.pathname === "/new-post"
  const value = {
    user,
  };

  // const handleUser = (user: UserType) => {
  //   if (!user && !isAvailableForViewing) {
  //     router.push("/");
  //   } else {
  //     setUser(user);
  //   }
  //   setIsLoading(false);
  // };

  useEffect(() => {
    console.log("user", user);

    const authStateChanged = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      !user && !isAvailableForViewing && (await router.push("/"));
    });

    // setIsLoading(true);
    // const authStateChanged = onAuthStateChanged(auth, handleUser);

    return () => {
      console.log("user", user);
      authStateChanged();
      console.log("user", user);
    };
  }, []);

  return (
    // (user && (
    //   <AuthContext.Provider value={value}>
    //   {children}
    //   </AuthContext.Provider>
    // ))
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
