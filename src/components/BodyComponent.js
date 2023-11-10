import mockData from "../../utils/mockData"
import RestaurantCards from "./RestaurantCards";
const resCardList = mockData;

const BodyComponent = () => {
    return(
        <div className="res-body">
            <div className="search">Search</div>
            <div className="res-container">
                {resCardList.map((restaurant)=> {
                    return(
                        <RestaurantCards resInfo = {restaurant}/>
                    )
                })            
                };  
            </div>
        </div>
    )
}

export default BodyComponent;