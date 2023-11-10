
const RestaurantCards = (props) => {
    const {resInfo} = props;
    const {cloudinaryImageId, name, avgRating,cuisines} = resInfo?.data;
    const {deliveryTime} = resInfo?.data?.sla;
    //const{cloudinaryImageId,name,avgRating,cuisines}=resInfo?.data,{deliveryTime}=resInfo?.data?.sla;
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