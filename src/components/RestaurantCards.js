import BodyComponent  from "./BodyComponent";

const RestaurantCards = (props) => {
    const {resCardList} = props;
    const {cloudinaryImageId, name, avgRating,cuisines} = resCardList?.info;
    const {deliveryTime} = resCardList?.info?.sla;
    //const{cloudinaryImageId,name,avgRating,cuisines}=resCardList?.info,{deliveryTime}=resCardList?.info?.sla;
    return(
        <div className="res-card">
            <img className="res-card-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} ></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{deliveryTime}mins</h4>
        </div>
    )
}

export default RestaurantCards;