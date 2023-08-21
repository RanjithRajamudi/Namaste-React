import { render, waitFor, fireEvent, screen } from '@testing-library/react'
import { StaticRouter } from "react-router-dom/server"
import { Provider } from "react-redux";
import store from "../../utils/store";
import Body from "../Body"
import { RESTAURANT_DATA } from '../../mocks/data'

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(RESTAURANT_DATA);
        },
    });
});

test("Shimmer should load on Homepage", () => {
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>
    );

    const shimmer = body.getByTestId("shimmer");
    expect(shimmer.children.length).toBe(10);
});

test("Restaurants should load on Homepage", async () => {
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>
    );

    await waitFor(() => expect(body.getByTestId("search-btn")))

    // const searchBtn = await findByTestId("search-btn");
    const resList = body.getByTestId("res-list");

    expect(resList.children.length).toBe(20);

});

test("Search for string(food) on Homepage", async () => {
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>
    );

    await waitFor(() => expect(body.getByTestId("search-btn")));

    const input = body.getByTestId("search-input");

    fireEvent.change(input, {
        target: {
            value: "cafe",
        }
    });

    const searchBtn = body.getByTestId("search-btn");

    fireEvent.click(searchBtn)

    const resList = body.getByTestId("res-list");
    expect(resList.children.length).toBe(2);

});