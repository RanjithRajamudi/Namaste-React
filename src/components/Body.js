import { useEffect, useState, useContext } from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer'
import { Link } from "react-router-dom";
import { filterData } from '../utils/helper'
import useGetOnline from '../utils/useGetOnline';
import UserContext from '../utils/UserContext';


const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState(null);
    const [searchText, setSearchText] = useState("");
    const { user, setUser } = useContext(UserContext);

    useEffect(() => {
        getRestaurants();
    }, [])

    async function getRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9432474&lng=77.56298079999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const online = useGetOnline();

    if (!online) {
        return <h1> Offline, Please check the internet connection...!</h1>
    }

    if (!allRestaurants) return null;
    //Conditional Rendering

    return (allRestaurants.length === 0 ? <Shimmer /> : (
        <>
            <div className="p-5 bg-pink-50 my-5">
                <input
                    data-testid="search-input"
                    type='text'
                    className='border border-black rounded-md focus:bg-green-300 p-2 m-2'
                    placeholder='Search'
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)} />
                <button data-testid="search-btn" className='p-2 mx-2 bg-slate-400 hover:bg-amber-600 rounded-md'
                    onClick={() => {
                        const data = filterData(searchText, allRestaurants);
                        setFilteredRestaurants(data)
                    }}>Search</button>
                <input value={user.name} onChange={(e) => setUser({ name: e.target.value, email: e.target.name })}></input>
            </div>
            <div className='flex flex-wrap' data-testid="res-list">
                {
                    filteredRestaurants.map((restaurant) => {
                        return (
                            <Link to={"/restaurant/" + restaurant.info.id} key={restaurant?.info.id}>
                                <RestaurantCard {...restaurant?.info} key={restaurant?.info.id} />
                            </Link>
                        )
                    })}
            </div>
        </>
    ))
}

export default Body;