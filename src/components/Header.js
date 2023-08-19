import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/images/Logo.jpg'
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Title = () => (
    <a href="/">
        <img
            className='h-28 p-2'
            alt="Logo"
            src={Logo}
        />
    </a>
);

const Header = () => {

    const [isLoggedIn, setLoggedIn] = useState(false);
    const { user } = useContext(UserContext);
    const cartItems = useSelector(store => store.cart.items);
    
    return (
        <div className='flex justify-between m-2 border border-black p-4 shadow-sm'>
            <Title />
            <div>
                <ul className='flex py-10'>
                    <li className='px-2'><Link to="/">Home</Link></li>
                    <li className='px-2'><Link to="/about">About</Link></li>
                    <li className='px-2'><Link to="/contact">Contact</Link></li>
                    <li className='px-2'><Link to="/instamart">Instamart</Link></li>
                    <li className='px-2'><Link to="/cart">Cart-{cartItems.length}</Link></li>
                </ul>
            </div>
            <h3 className="py-10">Welcome {user.name}</h3>
            <button onClick={() => setLoggedIn(!isLoggedIn)}>{isLoggedIn ? "Logout" : "Login"}</button>
        </div >
    )
};

export default Header;