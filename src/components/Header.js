import { useState } from "react";

const Title = () => (
    <a href="/">
        <img
            className='logo'
            alt="Logo"
            src='https://www.creativefabrica.com/wp-content/uploads/2018/10/Fast-Delivery-food-logo-by-DEEMKA-STUDIO-580x406.jpg'
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
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>

            <button onClick={() => setLoggedIn(!isLoggedIn)}>{isLoggedIn ? "Logout" : "Login"}</button>
        </div >
    )
};

export default Header;