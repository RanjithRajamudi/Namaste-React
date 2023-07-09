import { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer'

function filterData(searchText, restaurants) {
    const filteredData = restaurants.filter((restaurant) =>
        restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );
    return filteredData
}


const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    // empty dependency array => once after render
    // dependency array [searchText] => once after initial render + everytime after render (my searchtext changes)

    useEffect(() => {
        //API Call
        getRestaurants();
    }, [])

    async function getRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9432474&lng=77.56298079999999&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        console.log(json)

    }

    console.log("render");

    if (!allRestaurants) return null;

    if (filteredRestaurants?.length === 0) return <h1>No restaurant match your filter </h1>

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
                        return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
                    })}
            </div>
        </>
    ))
}

export default Body;