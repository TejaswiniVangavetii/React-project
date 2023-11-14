import {RESTAURANT_LOGO} from "../../utils/constants";

const HeaderComponent = () => {
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
                </ul>
            </div>
        </div>
    )
}

export default HeaderComponent;