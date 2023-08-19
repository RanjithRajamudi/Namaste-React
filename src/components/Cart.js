import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { addItem, clearCart } from "../utils/cartSlice";


const Cart = () => {

    const cartItems = useSelector(store => store.cart.items);
    console.log(cartItems)
    const dispatch = useDispatch()

    const handleClearCart = () => {
        dispatch(clearCart());
    }
   
    return cartItems.length ?
        <div>
            <h1 className="font-bold text-3xl">Cart Items - {cartItems.length}</h1>
            <button className='bg-green-300 p-2' onClick={() => handleClearCart()}>Clear Cart</button>
            <div className="flex">
                {cartItems.map((item) => (
                    <FoodItem className='flex' key={item.card.info.id}{...item.card.info} />
                ))}
            </div>
            
        </div> : <div>
            Your cart is empty
        </div>
}

export default Cart;