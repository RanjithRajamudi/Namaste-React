import { render, waitFor, fireEvent } from '@testing-library/react'
import { StaticRouter } from "react-router-dom/server"
import { Provider } from "react-redux";
import store from "../../utils/store";
import RestaurantMenu from '../RestaurantMenu';
import Header from '../Header';
import { MENU_DATA } from '../../mocks/data'

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MENU_DATA);
        },
    });
});

test("Add items to cart", async () => {
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
                <RestaurantMenu />
            </Provider>
        </StaticRouter>
    );

    await waitFor(() => expect(body.getByTestId("menu")));

    const menu = body.getAllByTestId("addBtn");

    fireEvent.click(menu[0]);


    const cart = body.getByTestId("cart");
    expect(cart.innerHTML).toBe("Cart-1");

});