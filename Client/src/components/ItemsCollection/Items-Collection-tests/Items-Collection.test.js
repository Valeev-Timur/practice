import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";
import ItemsCollection from "./ItemsCollection";

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("should render a greeting", () => {
    act(() => {
        render(<ItemsCollection />, container);
    });

    expect(
        pretty(container.innerHTML)
    ).toMatchInlineSnapshot();

    act(() => {
        render(<ItemsCollection name="FKN" />, container);
    });

    expect(
        pretty(container.innerHTML)
    ).toMatchInlineSnapshot();

    act(() => {
        render(<ItemsCollection name="Тест" />, container);
    });

    expect(
        pretty(container.innerHTML)
    ).toMatchInlineSnapshot();
});