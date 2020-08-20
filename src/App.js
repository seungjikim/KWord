import React, { Component, useEffect } from "react";
import LoginPage from "./LoginPage";
import firestore from "./firebase.utils";
import MainPage from "./MainPage";
import { Route } from "react-router-dom";

const App = () => {
  useEffect(() => {
    firestore
      .collection("Users")
      .get()
      .then((docs) => {
        docs.forEach((doc) => {
          console.log(doc.data());
        });
      });
  });
  return (
    <div>
        <Route exact path="/" component={LoginPage}/>
        <Route path="/main" component={MainPage}/>
    </div>
  );
};

export default App;