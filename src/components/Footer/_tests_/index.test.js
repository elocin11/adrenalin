import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./../index";

test("Footer should render correctly", () => {
  const { getByText } = render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );
  const items = [
    "Privacy",
    "Sitemap",
    "Facebook",
    "Linkedin",
    "Instagram",
    "Twitter",
  ];

  // check header navigation items
  items.map((item) => {
    let link = getByText(item);
    return expect(link).toBeInTheDocument();
  });
});
