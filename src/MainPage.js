import React from 'react'
import LogoImage from "./images/mainlogo.png";

const MainPage = () => {
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
        </div>
    )
}

export default MainPage;