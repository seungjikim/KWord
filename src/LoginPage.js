<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import LogoImage from "./images/mainlogo.png";
import { signInWithGoogle } from "./firebase.utils";
import { auth } from "./firebase.utils";
import { Redirect } from "react-router-dom";

const LoginPage = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      //console.log(user);
      if (user) {
        setUser(user);
      }
    });
  }, []);
=======
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
>>>>>>> 0c894ef5d40d72b84a3025ff69b689998f36e13b
  return (
    <div>
      {user && <Redirect to="/main"></Redirect>}
      <img src={LogoImage} width="300" height="300" />
<<<<<<< HEAD
      <button onClick={signInWithGoogle}>구글로 가입</button>
    </div>
  );
};

export default LoginPage;
=======
      <Button onClick={signIn}>구글로 가입</Button>
    </div>
  );
};
>>>>>>> 0c894ef5d40d72b84a3025ff69b689998f36e13b
