import React from 'react';
import { Button } from '@material-ui/core'
import LogoImage from "./images/mainlogo.png";
import { signInWithGoogle } from "./firebase.utils";

const LoginPage = () => {
  return (
    <div>
      <img src={LogoImage} width="300" height="300" />
      <Button onClick={signInWithGoogle}>구글로 가입</Button>
    </div>
  );
};

export default LoginPage;