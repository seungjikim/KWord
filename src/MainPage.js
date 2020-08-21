<<<<<<< HEAD
import React, { useState, useEffect } from "react";
=======
import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
>>>>>>> 0c894ef5d40d72b84a3025ff69b689998f36e13b
import LogoImage from "./images/mainlogo.png";
import { auth } from "./firebase.utils";
import { Redirect } from "react-router-dom";
import LoginPage from "./LoginPage";

<<<<<<< HEAD
const MainPage = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
        if (user) {
          //console.log(user);
          setUser(user);
        } else {
          setUser("undefined");
        }
      });
  })
  return (
    <div>
      {user === "undefined" && <Redirect to='/'/>}
      <div className="Header">
        <div className="HeaderDropDown">KR</div>
      </div>
      <div className="SideBar">
        <button
          className="SideBarButton"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          sidebar open/close
        </button>
        <ul>
          <li>
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Profile
            </a>
          </li>
          <li>
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Notice
            </a>
          </li>
          <li>
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Chat
            </a>
          </li>
          <li>
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Network
            </a>
          </li>
          <li>
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Other
            </a>
          </li>
        </ul>
      </div>
      <img src={LogoImage} width="300px" height="300px"></img>
      <div className="SearchBar">
        <button
          className="SearchButton"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Search
        </button>
        <input type="text" defaultValue="find your kword"></input>
      </div>
      <div className="Footer">
        <button
          className="GoToUpload"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          go to upload
        </button>
      </div>
      <button
        className="Logout"
        onClick={() =>
          auth
            .signOut()
            .then(function () {
              //console.log("log out success");
            })
            .catch(function (error) {
              //console.log("log out failed");
            })
        }
      >
        logout
      </button>
    </div>
  );
};
=======
const MainPage = ({ history }) => {
    return (
        <div>
            <div className="Header">
                <div className="HeaderDropDown">KR</div>
            </div>
            <div className="SideBar">
                <button className="SideBarButton" onClick={(e) => {e.preventDefault()}}>sidebar open/close</button>
                <ul>
                    <li><a href='' onClick={(e) => {e.preventDefault()}}>Profile</a></li>
                    <li><a href='' onClick={(e) => {e.preventDefault()}}>Notice</a></li>
                    <li><a href='' onClick={(e) => {e.preventDefault()}}>Chat</a></li>
                    <li><a href='' onClick={(e) => {e.preventDefault()}}>Network</a></li>
                    <li><a href='' onClick={(e) => {e.preventDefault()}}>Other</a></li>
                </ul>
            </div>
            <img src={LogoImage} width="300px" height="300px"></img>
            <div className="SearchBar">
                <button className="SearchButton" onClick={(e) => {e.preventDefault()}}>Search</button>
                <input type="text" defaultValue="find your kword"></input>
            </div>
            <div className="Footer">
                <button className="GoToUpload" onClick={(e) => {e.preventDefault()}}>go to upload</button>
            </div>
            <button className="Logout" onClick={() => auth.signOut()
            .then(function(){
                history.push("/")
                console.log('log out success');
            })
            .catch(function(error) {
                console.log(error, 'log out failed');
            })}>logout</button>
        </div>
    )
}
>>>>>>> 0c894ef5d40d72b84a3025ff69b689998f36e13b

export default MainPage;
