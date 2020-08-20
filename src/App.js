import React, { useState, useEffect, useHistory } from "react";
import LoginPage from "./LoginPage";
import MainPage from "./MainPage";
//import firestore from "./firebase.utils";
import { Route, withRouter, Redirect} from "react-router-dom";
import { auth } from "./firebase.utils";

const App = () => {


  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        <Redirect to="/main"></Redirect>
      }
      else {
        <Redirect to="/"></Redirect>
      }
    })
  });

    return (
      <div>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/main" component={MainPage} />
      </div>
    );
};

export default withRouter(App);
