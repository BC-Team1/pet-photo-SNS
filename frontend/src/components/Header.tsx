import * as React from 'react';
import { useRouter } from "next/router";
import { useAuthContext } from '../services/firebase/AuthContext';
import { app } from "../services/firebase/firebase";
import { getAuth, signOut } from "firebase/auth";
import { AppBar, Box, Toolbar, Typography, Button, Link } from '@mui/material';

const Header = () => {
  const router = useRouter();
  const auth = getAuth(app);
  const { user } = useAuthContext();
  const isLoggedIn = !!user;

  const handleLogout = async () => {
    await signOut(auth);
    await router.push("/");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/" underline="none" color="white">
              PETS
            </Link>
          </Typography>
          {isLoggedIn ?
            (<Box>
              <Button href="/new-post" variant="contained" sx={{ mr: 2 }} >新規投稿</Button>
              <Button href="/mypage" variant="contained" sx={{ mr: 2 }} >マイページ</Button>
              <Button variant="contained" onClick={handleLogout}>ログアウト</Button>
            </Box>) :
            (<Button href="/signin" variant="contained" >ログイン</Button>)
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;