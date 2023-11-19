import React from "react";
import { useState } from "react";
import {RESTAURANT_LOGO} from "../../utils/constants";

const HeaderComponent = () => {
    const [ loginBtn, setloginBtn] = useState("Login");
    // let loginBtn = "logout";

    return(
        <div className="HeaderContainer">
            <div className="res-log">
                <img className="res-log-img" src={RESTAURANT_LOGO}></img>
            </div>
            <div className="nav-items">
                <ul className="nav-items-list">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="btnLogin" onClick={ () => { loginBtn == "Login" ? setloginBtn("Logout") : setloginBtn("Login")}}>{loginBtn}</button>
                </ul>
            </div>
        </div>
    )
}

export default HeaderComponent;