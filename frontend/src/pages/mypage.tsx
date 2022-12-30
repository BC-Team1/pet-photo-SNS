import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useAuthContext } from '../services/firebase/AuthContext';

const MyPage = () => {
  const router = useRouter();
  const { user } = useAuthContext();
  const isLoggedIn = !!user;
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     router.push("/signin");
  //   };
  // }, []);

  useEffect(() => {
    setIsLoading(true);
    // console.log(isLoading);
    // setTimeout(() => {
    //   console.log(isLoading);
    //   setIsLoading(false);
    //   console.log(isLoading);
    // }, 1500);

    (async () => {
      if (!isLoggedIn) {
        router.push("/signin");
      };
    })();
    // if (!isLoggedIn) {
    //   router.push("/signin");
    // };

    return () => { setIsLoading(false) };
  });

  return (
    // ((!isLoading && isLoggedIn) && (
    //   <h1>My page</h1>
    // ))
    // ((isLoggedIn && !isLoading) ? (
    //   <h1>My page</h1>
    // ) : (
    //   <Link href="signin">ログイン</Link>
    // ))
    (!isLoading && (
      <h1>My page</h1>
    ))
  );
};

export default MyPage;