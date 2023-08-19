import React, { lazy, Suspense, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Error from './components/Error';
import Contact from './components/Contact';
import Profile from './components/Profile';
import RestaurantMenu from './components/RestaurantMenu';
import Cart from './components/Cart';
import Shimmer from './components/Shimmer';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import store from './utils/store';

// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// On Demand Loading
// Dyamic Import

const Instamart = lazy(() => import("./components/Instamart"));
const About = lazy(() => import("./components/About"))

const AppLayout = () => {
    const [user, setUser] = useState({
        name: "Ranjith",
        email: 'test@dev.com'
    })
    return (
        <Provider store={store}>
            <UserContext.Provider value={{ user: user, setUser: setUser }}>
                <Header />
                <Outlet />
                <Footer />
            </UserContext.Provider>
        </Provider>
    );
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: (
                    <Suspense>
                        <About />
                    </Suspense>),
                children: [
                    {
                        path: 'profile',
                        element: <Profile />
                    }
                ]
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/restaurant/:restaurantId',
                element: <RestaurantMenu />
            },
            {
                path: '/instamart',
                element: (
                    <Suspense fallback={<Shimmer />}>
                        <Instamart />
                    </Suspense>
                ),
            },
            {
                path: '/cart',
                element: <Cart />
            }
        ]
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
