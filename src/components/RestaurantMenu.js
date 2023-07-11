import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { IMG_CDN_URL } from '../constants'

import Shimmer from './Shimmer';

const RestaurantMenu = () => {

    const { resId } = useParams();

    const [restaurant, setRestaurant] = useState(null);


    useEffect(() => {
        getRestaurantInfo();
    }, [])

    async function getRestaurantInfo() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9432474&lng=77.56298079999999&restaurantId="+resId);
        const json = await data.json();
        console.log(json);
        setRestaurant(json.data)
    }

return (!restaurant) ? <Shimmer /> : (
    <div>
        <h1>Restaurant id:{resId}</h1>
        <h2>{restaurant?.cards[0]?.card?.card?.info.name}</h2>
        <img src={IMG_CDN_URL + restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId} />
        <h3>{restaurant?.cards[0]?.card?.card?.info.areaName}</h3>
        <h3>{restaurant?.cards[0]?.card?.card?.info.city}</h3>
        <h3>{restaurant?.cards[0]?.card?.card?.info.avgRating} stars</h3>
        <h3>{restaurant?.cards[0]?.card?.card?.info.costForTwoMessage}</h3>
        <div>
            <h1>Menu</h1>
            <ul>
                {Object.values(restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards).map((item) => (
                    <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
                ))}</ul></div>
        <h2></h2>

    </div>
)
}

export default RestaurantMenu;