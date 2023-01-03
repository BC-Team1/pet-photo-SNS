import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useAuthContext } from '../services/firebase/AuthContext';

const MyPage = () => {
  const router = useRouter();
  const { user } = useAuthContext();
  const isLoggedIn = !!user;

  return (
    <h1>My page</h1>
  );
};

export default MyPage;