import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import axios from 'axios';
import { getAuth, createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useAuthContext } from '../services/firebase/AuthContext';
import { app } from '../services/firebase/firebase';
import { Button, InputLabel, TextField, Snackbar, Alert, Typography, Stack } from '@mui/material';

const SignUp = () => {
  const router = useRouter();
  const { user } = useAuthContext();
  const auth = getAuth(app);
  const isLoggedIn = !!user;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUpWithEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
    router.push("/");
  };

  const handleClose = async () => {
    await router.push("/");
  };

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  const handleSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
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
        key={"top" + "center"}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="warning">
          すでにログインしています
        </Alert>
      </Snackbar>
      <Stack spacing={2} sx={{ m: 6 }}  alignItems='center' justifyContent='center' direction="column">
        <Typography variant="h6">新規登録</Typography>
        <Stack component="form"
          onSubmit={handleSignUpWithEmail}
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
              新規登録
            </Button>
          </div>
          <div>
            <Typography variant="caption" >すでに登録している人は<Link href="/signin">こちら</Link></Typography>
          </div>
        </Stack>
        <Stack spacing={2} >
          <Button onClick={handleSignInWithGoogle}>Googleで登録</Button>
          <Button onClick={handleSignInWithGithub}>Githubで登録</Button>
        </Stack>
      </Stack>
    </>
  );
};

export default SignUp;