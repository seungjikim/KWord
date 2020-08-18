import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { LoginPage } from './LoginPage';
import { firestore } from "./firebase";

const App = () => {
  useEffect(() => {
    firestore
      .collection("Client")
      .get()
      .then((docs) => {
        docs.forEach((doc) => {
          console.log(doc.data());
        });
      });
  });
  return (
    <div>
      <p>React here!</p>
      { LoginPage }
    </div>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
