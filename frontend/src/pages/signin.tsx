import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useAuthContext } from '../services/firebase/AuthContext';
import { app } from '../services/firebase/firebase';
import axios from 'axios';
import { Alert, Button, InputLabel, Snackbar, TextField, Typography, Stack } from '@mui/material';

const SignIn = () => {
  const router = useRouter();
  const auth = getAuth(app);
  const { user } = useAuthContext();
  const isLoggedIn = !!user;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignInWithEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // await signInWithEmailAndPassword(auth, email, password);

    const verifyIdToken = async () => {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const token = await result.user.getIdToken();

      const config = {
        headers: { authorization: `Bearer ${token}` },
      };

      // Todo 後で消す
      console.log("config", config);

      try {
        axios.post(`http://localhost:3000/api/v1/auth`, null, config);
        router.push("/");
        console.log("ログインしました");
      } catch (err) {
        let message;
        if (axios.isAxiosError(err) && err.response) {
          console.error(err.response.data.message);
        } else {
          message = String(err);
          console.error(message);
        }
      }
    };
    verifyIdToken();
    // router.push("/");
    // console.log("ログインしました");
  };

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  const handleClose = async () => {
    await router.push("/");
  };

  const handleSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    // await signInWithPopup(auth, provider)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    const verifyIdToken = async () => {
      const result = await signInWithPopup(auth, provider);
      const token = await result.user.getIdToken();

      const config = {
        headers: { authorization: `Bearer ${token}` },
      };

      try {
        const response = await axios.post("http://localhost:3000/api/v1/auth", null, config);
        router.push("/");
        console.log("login ok");
      } catch (err) {
        let message;
        if (axios.isAxiosError(err) && err.response) {
          console.error(err.response.data.message);
        } else {
          message = String(err);
          console.error(message);
        }
      }
    };
    verifyIdToken();
  };

  const handleSignInWithGithub = async () => {
    const provider = new GithubAuthProvider();
    await signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      })
  };

  return (
    <>
      <Snackbar
        open={isLoggedIn}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="warning">
          すでにログインしています
        </Alert>
      </Snackbar>
      <Snackbar
        open={!isLoggedIn}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={3000}
      >
        <Alert severity="warning">ログインしてください</Alert>
      </Snackbar>
      <Stack spacing={2} sx={{ m: 6 }}  alignItems='center' justifyContent='center' direction="column">
        <Typography variant="h6">ログイン</Typography>
        <Stack component="form"
          onSubmit={handleSignInWithEmail}
          spacing={2}
          alignItems='center' justifyContent='center' direction="column"
        >
          <div>
            <InputLabel>メールアドレス</InputLabel>
            <TextField
              name="email"
              type="email"
              size="small"
              onChange={handleChangeEmail}
            />
          </div>
          <div>
            <InputLabel>パスワード</InputLabel>
            <TextField
              name="password"
              type="password"
              size="small"
              onChange={handleChangePassword}
            />
          </div>
          <div>
            <Button type="submit" variant="outlined">
              ログイン
            </Button>
          </div>
          <div>
            <Typography variant="caption" >新規登録は<Link href="/signup">こちら</Link></Typography>
          </div>
        </Stack>
        <Stack spacing={2} >
          <Button onClick={handleSignInWithGoogle}>Googleログイン</Button>
          <Button onClick={handleSignInWithGithub}>Githubログイン</Button>
        </Stack>
      </Stack>
    </>
  );
};

export default SignIn;