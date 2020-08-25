import React from "react";

function Product({ product }) {
  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.productName}</td>
      <td>{product.quantity}</td>
      <td>{product.price}</td>
    </tr>
  );
}

export default Product;
