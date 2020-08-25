import React from "react";
import { Products } from "../products/products";
import { getAllProducts } from "../data/api";
import App from "../App";
import { shallow } from "enzyme";
import Product from "../products/product/product";

describe("All Products", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe("Test case to check if correct heading name is rendered", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Products products={getAllProducts()} />);
  });

  test("and it renders correctly", () => {
    expect(wrapper.find("h1").render().text()).toEqual("Product List");
  });
});

describe("Test case to check if one ProductList React component is rendered", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Products products={getAllProducts()} />);
  });

  test("and it renders correctly", () => {
    expect(wrapper.find(Product).length).toBeGreaterThan(1);
  });
});
