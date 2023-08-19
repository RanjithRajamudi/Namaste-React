import { useDispatch, useSelector } from "react-redux";
import { IMG_CDN_URL } from '../constants'

const FoodItem = ({
    name,
    id,
    imageId,
    price
}) => {
    const cartItems = useSelector(store => store.cart.items);
    const handleItemAdd = () => {
        dispatch(addItem());
    }
    const handleItemRemove = () => {
        dispatch(removeItem());
    }
    return (
        <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
            <img className="w-full" src={IMG_CDN_URL
                + imageId} />
            <h2 className='font-bold text-xl'>{name}</h2>
            <h4>Rupees:{price / 100}</h4>
            <div className="border border-black w-12">    
            <button className="p-1" onClick={() => handleItemRemove()}>-</button>
            {cartItems.length}
            <button className="p-1" onClick={() => handleItemAdd()}>+</button>
            </div>
        </div>
    )
}

export default FoodItem;