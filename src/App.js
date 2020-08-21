import React, { useEffect } from "react";
import LoginPage from "./LoginPage";
import MainPage from "./MainPage";
//import firestore from "./firebase.utils";
<<<<<<< HEAD
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
=======
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
>>>>>>> 0c894ef5d40d72b84a3025ff69b689998f36e13b
};

export default withRouter(App);
