import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import axios from 'axios';
import { app } from '../services/firebase/firebase';
import { getAuth, createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useAuthContext } from '../services/firebase/AuthContext';
import { Button, InputLabel, TextField, Snackbar, Alert } from '@mui/material';

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
    <div>
      <Snackbar
        open={isLoggedIn}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={3000}
        key={"top" + "center"}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="warning">
          ????????????????????????????????????
        </Alert>
      </Snackbar>
      <h2>??????????????????</h2>
      <form onSubmit={handleSignUpWithEmail}>
        <div
        >
          <InputLabel>?????????????????????</InputLabel>
          <TextField
            name="email"
            type="email"
            size="small"
            onChange={handleChangeEmail}
          />
        </div>
        <div>
          <InputLabel>???????????????</InputLabel>
          <TextField
            name="password"
            type="password"
            size="small"
            onChange={handleChangePassword}
          />
        </div>
        <div>
          <Button type="submit" variant="outlined">
            ??????
          </Button>
        </div>
        <div>
          <Link href={"/signin"}>
            ??????????????????????????????????????????
          </Link>
        </div>
      </form>
      <Button onClick={handleSignInWithGoogle}>Google?????????</Button>
      <Button onClick={handleSignInWithGithub}>Github?????????</Button>
    </div>
  );
};

export default SignUp;