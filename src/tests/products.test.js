import React from "react";
import { shallow } from "enzyme";
import { Products } from "../products/products";
import { getAllProducts } from "../data/api";

describe("Test case to check if “Product Name” is rendered as second column heading", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Products products={getAllProducts()} />);
  });

  test("renders correctly", () => {
    expect(wrapper.find("th").at(1).render().text()).toEqual("Product Name");
  });
});

describe("Test case to check if “Price” is rendered as fourth column heading", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Products products={getAllProducts()} />);
  });

  test("renders correctly", () => {
    expect(wrapper.find("th").at(3).render().text()).toEqual("Price");
  });
});

describe("Test case to check if 2nd Product’s name is passed as props to 2nd Product component", () => {
  let wrapper;
  let products = getAllProducts();
  beforeEach(() => {
    wrapper = shallow(<Products products={products} />);
  });

  test("renders correctly", () => {
    expect(wrapper.find("Product").at(1).prop("product").productName).toBe(
      products[1].productName
    );
  });
});

describe("Test case to check if 2nd Product’s price is passed as props to 2nd Product component", () => {
  let wrapper;
  let products = getAllProducts();

  beforeEach(() => {
    wrapper = shallow(<Products products={products} />);
  });

  test("renders correctly", () => {
    expect(wrapper.find("Product").at(1).prop("product").price).toBe(
      products[1].price
    );
  });
});

/**
 * 
3)– Meaning of this test case is that when array of products containing at least 2 product objects are passed, 
“product name” field  present in the 2nd product object is passed as props to the “Product” React component which renders the 2nd row.
4)– Meaning of this test case is that when array of products containing at 2 least product objects are passed, “price” field present in the 2nd product object is passed as props to the “Product” React component which renders the 2nd row. (See below for more explanation)
 */
