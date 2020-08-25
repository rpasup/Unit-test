import React from "react";
import Product from "./product/product";
import "./styles.css";

export const Products = ({ products }) => {
  return (
    <div className="products">
      <h1>Product List</h1>
      <table>
        <thead>
          <tr>
            <th>{"ID"}</th>
            <th>{"Product Name"}</th>
            <th>{"Quantity"}</th>
            <th>{"Price"}</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((prod) => <Product key={prod.id} product={prod} />)}
        </tbody>
      </table>
    </div>
  );
};
