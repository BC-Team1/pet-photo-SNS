import * as React from 'react';
import { useRouter } from "next/router";
import { AppBar, Box, Toolbar, Typography, Button, Link } from '@mui/material';

const Header = () => {
  const router = useRouter();


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/" underline="none" color="white">
              PETS
            </Link>
          </Typography>
            <Box>
              <Button href="/mypage" variant="contained" sx={{ mr: 2 }} >マイページ</Button>
              <Button href="/new-post" variant="contained" sx={{ mr: 2 }} >新規投稿</Button>
            </Box> 
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;