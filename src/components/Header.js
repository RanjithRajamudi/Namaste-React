import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/images/Logo.jpg'

const Title = () => (
    <a href="/">
        <img
            className='logo'
            alt="Logo"
            src={Logo}
        />
    </a>
);

const Header = () => {

    const [isLoggedIn, setLoggedIn] = useState(false);
    return (
        <div className='header'>
            <Title />
            <div className='nav-items'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/instamart">Instamart</Link></li>
                    <li><Link to="">Cart</Link></li>
                </ul>
            </div>

            <button onClick={() => setLoggedIn(!isLoggedIn)}>{isLoggedIn ? "Logout" : "Login"}</button>
        </div >
    )
};

export default Header;