import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/images/Logo.jpg'

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
    return (
        <div className='flex justify-between m-2 border border-black p-4 shadow-sm'>
            <Title />
            <div>
                <ul className='flex py-10'>
                    <li className='px-2'><Link to="/">Home</Link></li>
                    <li className='px-2'><Link to="/about">About</Link></li>
                    <li className='px-2'><Link to="/contact">Contact</Link></li>
                    <li className='px-2'><Link to="/instamart">Instamart</Link></li>
                    <li className='px-2'><Link to="">Cart</Link></li>
                </ul>
            </div>

            <button onClick={() => setLoggedIn(!isLoggedIn)}>{isLoggedIn ? "Logout" : "Login"}</button>
        </div >
    )
};

export default Header;