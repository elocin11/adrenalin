import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./../index";

test("Header should render correctly", () => {
  const { getByText } = render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  const items = [
    "Culture",
    "Work",
    "Clients",
    "Services",
    "Careers",
    "Contact",
  ];

  // check header navigation items
  items.map((item) => {
    let link = getByText(item);
    return expect(link).toBeInTheDocument();
  });
});
