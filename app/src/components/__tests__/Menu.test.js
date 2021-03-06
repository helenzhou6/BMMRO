import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Menu from "../Menu/Menu";

describe("Menu", () => {
  it("renders the menu popup when you click on the menu button", () => {
    const { getByTestId, queryByTestId, getByRole, queryByRole } = render(
      <Menu
        menuButtonComponent={<div data-testid="menu-button" />}
        menuItems={[<div data-testid="menu-item" />]}
      />
    );

    expect(getByTestId("menu-button")).toBeInTheDocument();
    expect(queryByRole("menu")).not.toBeInTheDocument();
    expect(queryByRole("menuitem")).not.toBeInTheDocument();
    expect(queryByTestId("menu-item")).not.toBeInTheDocument();
    expect(queryByTestId("menu-mask")).not.toBeInTheDocument();

    fireEvent.click(getByRole("button", { name: "Open menu" }));

    expect(getByRole("menu")).toBeInTheDocument();
    expect(getByRole("menuitem")).toBeInTheDocument();
    expect(getByTestId("menu-item")).toBeInTheDocument();
  });

  it("closes the menu popup when you click outside the menu", () => {
    const { getByTestId, queryByTestId, getByRole, queryByRole } = render(
      <Menu
        menuButtonComponent={<div data-testid="menu-button" />}
        menuItems={[<div data-testid="menu-item" />]}
      />
    );

    fireEvent.click(getByRole("button", { name: "Open menu" }));

    expect(getByRole("menu")).toBeInTheDocument();
    expect(getByRole("menuitem")).toBeInTheDocument();
    expect(getByTestId("menu-item")).toBeInTheDocument();

    fireEvent.click(getByTestId("menu-mask"));

    expect(getByTestId("menu-button")).toBeInTheDocument();
    expect(queryByRole("menu")).not.toBeInTheDocument();
    expect(queryByRole("menuitem")).not.toBeInTheDocument();
    expect(queryByTestId("menu-item")).not.toBeInTheDocument();
    expect(queryByTestId("menu-mask")).not.toBeInTheDocument();
  });
});
