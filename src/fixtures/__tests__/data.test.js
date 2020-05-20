import data from "./../data";

// match the data fixture to the generated snapshot
// should have 4 items
test("data fixtures is correct", () => {
  expect(data).toMatchSnapshot();
  expect(data).toHaveLength(4);
});

// check the property of each items
data.map((item) =>
  test(`${item} should have properties (id, title, title_long, tag, thumb, image, slug, questions)`, () => {
    expect(item).toHaveProperty("id");
    expect(item).toHaveProperty("title");
    expect(item).toHaveProperty("title_long");
    expect(item).toHaveProperty("tag");
    expect(item).toHaveProperty("thumb");
    expect(item).toHaveProperty("image");
    expect(item).toHaveProperty("slug");
    expect(item).toHaveProperty("questions");
  })
);
