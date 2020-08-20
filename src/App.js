import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import LoginPage from './LoginPage';
import firestore from './firebase.utils';
import firebase from 'firebase/app';

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
      <LoginPage/>
    </div>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
