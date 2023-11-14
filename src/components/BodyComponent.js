import React from "react";
import { useState } from "react";
import mockData from "../../utils/mockData"
import RestaurantCards from "./RestaurantCards";
const resCardList = mockData;
 
const BodyComponent = () => {
    var [listOfRestaurants, setlistOfRestaurants] = useState(resCardList);

    function topRatingRestaurants() {
        let filteredListOfRestaurants =  listOfRestaurants.filter((filteredList) => filteredList?.data?.avgRating >= 4 );
        console.log("filteredListOfRestaurants", filteredListOfRestaurants);
        setlistOfRestaurants(filteredListOfRestaurants);
    }
    return(
        <div className="res-body">
            <div className="search">
                <button className="ratingRestaurants" onClick={() => {topRatingRestaurants()}}>Top Rating Restaurants</button>
            </div>
            <div className="res-container">
                {listOfRestaurants.map((restaurant)=> {
                    return(
                        <RestaurantCards  resInfo = {restaurant}/>
                    )
                })            
                };  
            </div>
        </div>
    )
}

export default BodyComponent;