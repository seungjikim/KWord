import React from 'react';
import LogoImage from "./images/mainlogo.png";
import { signInWithGoogle } from "./firebase.utils";

const LoginPage = () => {
  return (
    <div>
      <img src={LogoImage} width="300" height="300" />
      <button onClick={signInWithGoogle}>구글로 가입</button>
    </div>
  );
};

export default LoginPage;