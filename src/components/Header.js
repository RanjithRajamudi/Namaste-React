const Title = () => (
    <a href="/">
        <img
            className='logo'
            alt="Logo"
            src='https://www.creativefabrica.com/wp-content/uploads/2018/10/Fast-Delivery-food-logo-by-DEEMKA-STUDIO-580x406.jpg'
        />
    </a>
);


const Header = () => (
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
    </div>
);

export default Header;