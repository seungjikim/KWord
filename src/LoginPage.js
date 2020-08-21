import React, { useEffect, useRef, useState } from 'react';
import { Route, Link, Redirect } from "react-router-dom";
import { Button, useForkRef } from '@material-ui/core'
import LogoImage from "./images/mainlogo.png";
import { signInWithGoogle, auth } from "./firebase.utils";
import MainPage from './MainPage';

export default function LoginPage({ history }) {

  function signIn() {
    const userInfo = signInWithGoogle().then(userInfo => {
      history.push("/main")
    })
  }
  return (
    <div>
      <img src={LogoImage} width="300" height="300" />
      <Button onClick={signIn}>구글계정으로 로그인</Button>
    </div>
  );
};
