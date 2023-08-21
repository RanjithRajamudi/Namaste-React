import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../utils/cartSlice';
import useGetRestaurant from '../utils/useGetRestaurant';
import { IMG_CDN_URL } from '../constants'
import Shimmer from './Shimmer';

const RestaurantMenu = () => {

    const { restaurantId } = useParams();

    const restaurant = useGetRestaurant(restaurantId);
    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        dispatch(addItem(item))
    }
    const handleRemoveItem = (item) => {
        dispatch(removeItem(item))
    }

    return (!restaurant) ? <Shimmer /> : (
        <div className='flex'>
            <div>
                <h1>Restaurant id:{restaurantId}</h1>
                <h2>{restaurant?.cards[0]?.card?.card?.info.name}</h2>
                <img src={IMG_CDN_URL + restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId} />
                <h3>{restaurant?.cards[0]?.card?.card?.info.areaName}</h3>
                <h3>{restaurant?.cards[0]?.card?.card?.info.city}</h3>
                <h3>{restaurant?.cards[0]?.card?.card?.info.avgRating} stars</h3>
                <h3>{restaurant?.cards[0]?.card?.card?.info.costForTwoMessage}</h3>
            </div>
            <div className='p-5'>
                <h1>Menu</h1>
                <ul data-testid="menu">
                    {Object.values(restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards).map((item) => (
                        <div className='flex mb-1'>
                            <li className='flex justify-between' key={item?.card?.info?.id}>
                                <button
                                    className='border border-black rounded-md p-2'
                                    onClick={() => handleRemoveItem(item)}>removeItem</button>
                                <div>{item?.card?.info?.name}</div>
                                <button
                                    data-testid='addBtn'
                                    className='border border-black bg-green-400 rounded-md p-1'
                                    onClick={() => handleAddItem(item)}>addItem</button></li>

                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default RestaurantMenu;