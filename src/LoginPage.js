import React, { useEffect, useRef, useState } from 'react';
import { Route, Link } from "react-router-dom";
import { Button, useForkRef } from '@material-ui/core'
import LogoImage from "./images/mainlogo.png";
import { signInWithGoogle, auth } from "./firebase.utils";
import MainPage from './MainPage';

const LoginPage = () => {
  
  const [user, setUser] = useState(null);
  auth.onAuthStateChanged(user => {
    console.log(user)
    setUser(user)
    if (user !== null) {
      return (
        <Link to="/main"></Link>
      )
    }
  });

  return (
    <div>
      <img src={LogoImage} width="300" height="300" />
      <Button onClick={signInWithGoogle}>구글로 가입</Button>
    </div>
  );
};
export default LoginPage;