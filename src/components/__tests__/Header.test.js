import { render } from "@testing-library/react"
import { StaticRouter } from "react-router-dom/server"
import { Provider } from "react-redux";
import store from "../../utils/store";
import Header from "../Header"

test("Logo should load on rendering header", () => {
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>
    );

    const logo = header.getAllByTestId("logo");
    expect(logo[0].src).toBe("http://localhost/dummy.png");

});

test("Online Status should be green on rendering header", () => {
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>
    );

    const onlineStatus = header.getByTestId("online-status");
    expect(onlineStatus.innerHTML).toBe("🟢");
});

test("Cart should have 0 items on rendering header", () => {
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>
    );

    const cart = header.getByTestId("cart");
    expect(cart.innerHTML).toBe("Cart-0");
});