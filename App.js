import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./src/components//HeaderComponent"
import BodyComponent from "./src/components/BodyComponent";


const RestaurantAppComponent = () => {
    return(
        <div className = "container">
            <HeaderComponent />
            <BodyComponent />
        </div>
    )
}

const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<RestaurantAppComponent/>);
