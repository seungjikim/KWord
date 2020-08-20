import React, { useEffect } from "react";
import LoginPage from "./LoginPage";
import MainPage from "./MainPage";
//import firestore from "./firebase.utils";
import { Route, withRouter } from "react-router-dom";

const App = () => {
  useEffect(() => {
    /*
    firestore
      .collection("Users")
      .get()
      .then((docs) => {
        docs.forEach((doc) => {
          console.log(doc.data());
        });
      });
    */
  });
  return (
    <div>
      <Route exact path="/" render={() => <LoginPage />}></Route>
      <Route path="/main" render={() => <MainPage />}></Route>
    </div>
  );
};

export default withRouter(App);
