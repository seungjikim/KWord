import React from 'react'
import LogoImage from "./images/mainlogo.png";

const MainPage = () => {
    return (
        <div>
            <div className="Header">
                <div className="HeaderDropDown">KR</div>
            </div>
            <div className="SideBar">
                <button className="SideBarButton"></button>
                <ul>
                    <li><a href=''>Profile</a></li>
                    <li><a href=''>Notice</a></li>
                    <li><a href=''>Chat</a></li>
                    <li><a href=''>Network</a></li>
                    <li><a href=''>Other</a></li>
                </ul>
            </div>
            <img src={LogoImage} width="300px" height="300px"></img>
            <div className="SearchBar">
                <button className="SearchButton">Search</button>
                <input type="text" defaultValue="find your kword"></input>
            </div>
            <div className="Footer">
                <button className="GoToUpload">go to upload</button>
            </div>
        </div>
    )
}

export default MainPage;