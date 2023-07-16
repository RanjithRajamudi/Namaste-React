import { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer'
import { Link } from "react-router-dom";
import filterData from '../utils/helper'
import useGetOnline from '../utils/useGetOnline';


const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        getRestaurants();
    }, [])

    async function getRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9432474&lng=77.56298079999999&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        console.log(json)
    }

    const online = useGetOnline();

    if(!online) {
        return <h1> Offline, Please check the internet connection...!</h1>
    }

    if (!allRestaurants) return null;
    //Conditional Rendering

    return (allRestaurants.length === 0 ? <Shimmer /> : (
        <>
            <div className='search-container'>
                <input
                    type='text'
                    className='search-input'
                    placeholder='Search'
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)} />
                <button className='search-btn' onClick={() => {
                    const data = filterData(searchText, allRestaurants);
                    setFilteredRestaurants(data)
                }}>Search</button>
            </div>
            <div className='restaurant-list'>
                {
                    filteredRestaurants.map((restaurant) => {
                        return (
                            <Link to={"/restaurant/" + restaurant.data.id} key={restaurant.data.id}>
                                <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
                            </Link>
                        )
                    })}
            </div>
        </>
    ))
}

export default Body;