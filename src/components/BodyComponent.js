import React from "react";
import { useState, useEffect } from "react";
import mockData from "../../utils/mockData"
import RestaurantCards from "./RestaurantCards";
 
const BodyComponent = () => {
    let [searchFilter, setSearchFilter] = useState("")
    let [filteredData, setFilteredData] = useState(mockData);
    let [listOfRestaurants, setlistOfRestaurants] = useState(mockData); //state variable
    // Use Effect
    //  useEffect(
    //     () => {
    //         fetchData();
    //         }, 
    //     []);
        
    //     const fetchData = async() => {
    //         const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    //         const JSON = await data.json();
    //         // console.log("JSON", JSON);
    //         setlistOfRestaurants(JSON?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    //         console.log(JSON?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    //     }

    function topRatingRestaurants() {
        let filteredListOfRestaurants =  listOfRestaurants.filter((filteredList) => filteredList?.info?.avgRating >= 4 );
        console.log("filteredListOfRestaurants", filteredListOfRestaurants);
        setlistOfRestaurants(filteredListOfRestaurants);
    }
    
    
    if(listOfRestaurants === 0) {
        //need to implement Shimmer UI
        return <h1>loading...</h1>
    }
    return(
        <div className="res-body">
            <div className="searchComp">
                <input type="search" className="search" value={searchFilter} onChange={(e) => {
                    setSearchFilter(e.target.value)
                    console.log(e.target.value)
                }}></input>
                <button onClick={() => {
                    let filteredRes = listOfRestaurants.filter((res) => {
                        return res?.info?.name?.toLowerCase().includes(searchFilter.toLowerCase());
                    });
                   setFilteredData(filteredRes);
                }}>search</button>
                <button className="ratingRestaurants" onClick={() => { topRatingRestaurants() }}>Top Rating Restaurants</button>
            </div>
            <div className="res-container">
                {filteredData.map((restaurant, index) => {
                    return (
                        <RestaurantCards key={index} resCardList={restaurant} />

                    )
                })
                };
            </div>
        </div>
    )
}

export default BodyComponent;