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
  return (
    <div>
      {user && <Redirect to="/main"></Redirect>}
      <img src={LogoImage} width="300" height="300" />
      <button onClick={signInWithGoogle}>구글로 가입</button>
    </div>
  );
};

export default LoginPage;
