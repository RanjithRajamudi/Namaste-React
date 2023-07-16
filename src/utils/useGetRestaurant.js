import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from '../constants'

const useGetRestaurant = (restaurantId) => {
    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        getRestaurantInfo();
    }, [])

    async function getRestaurantInfo() {
        const data = await fetch(FETCH_MENU_URL + restaurantId);
        const json = await data.json();
        console.log(json);
        setRestaurant(json.data)
    }

    return restaurant;

};

export default useGetRestaurant;