import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Article from "./../index";

test("Render article with data correctly", () => {
  const data = {
    title_long:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut libero id auctor.",
    tag: "Toga Group",
    thumb: "1001_thumb.jpg",
    slug: "lorem-ipseum",
  };

  const { getByTestId } = render(
    <BrowserRouter>
      <Article
        title_long={data.title_long}
        tag={data.tag}
        thumb={data.thumb}
        slug={data.slug}
      />
    </BrowserRouter>
  );

  expect(getByTestId("article")).toMatchSnapshot();
});
