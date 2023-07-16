import { useParams } from 'react-router-dom'
import { IMG_CDN_URL } from '../constants'
import Shimmer from './Shimmer';
import useGetRestaurant from '../utils/useGetRestaurant';

const RestaurantMenu = () => {

    const { restaurantId } = useParams();

    const restaurant = useGetRestaurant(restaurantId);

    return (!restaurant) ? <Shimmer /> : (
        <div>
            <h1>Restaurant id:{restaurantId}</h1>
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
    );
}

export default RestaurantMenu;