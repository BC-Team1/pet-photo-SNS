import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuthContext } from '../services/firebase/AuthContext';

const NewPost = () => {
  const router = useRouter();
  const { user } = useAuthContext();
  const isLoggedIn = !!user;

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/signin");
    };
  }, []);

  return (
    <h1>New post</h1>
  );
};

export default NewPost;