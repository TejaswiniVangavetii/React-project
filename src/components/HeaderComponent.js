import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
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
                    <li>
                        <Link className="link" to= "/">Home</Link>
                    </li>
                    <li>
                        <Link className="link" to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link className="link" to= "/contact">Contact Us</Link>
                    </li>
                    <li>Cart</li>
                    <button className="btnLogin" onClick={ () => { 
                        return loginBtn == "Login" ? setloginBtn("Logout") : setloginBtn("Login") } }>{loginBtn}</button>
                </ul>
            </div>
        </div>
    )
}

export default HeaderComponent;