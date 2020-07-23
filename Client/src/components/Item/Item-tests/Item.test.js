import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Item from "./Item";

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

  async function timeSensativeAction(){
    await sleep(5000)
  }
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

it("admin page", () => {

timeSensativeAction();
  act(() => {
    render(<Item column = "2"/>, container);   
  });
  timeSensativeAction();
  expect(container.textContent).toBe("2");
});