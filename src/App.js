import React, { useState, useEffect, useHistory } from "react";
import LoginPage from "./LoginPage";
import MainPage from "./MainPage";
//import firestore from "./firebase.utils";
import { Route, withRouter } from "react-router-dom";
import { auth } from "./firebase.utils";

const App = () => {
  const [pagehistory, setPagehistory] = useState(history);

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
  if (
    auth.onAuthStateChanged((user) => {
      if (user) {
        history.pushState("", "", "/main");
        console.log(location.pathname);
      }
      else {
        history.pushState("", "", "/");
        console.log(location.pathname);
      }
    })
  )
    return (
      <div>
        <Route exact path="/" component={LoginPage} />
        <Route path="/main" component={MainPage} />
      </div>
    );
};

export default withRouter(App);
