import React from "react";
import "./App.css";
import { getAllProducts } from "./data/api";
import { Products } from "./products/products";

function App() {
  return (
    <div className="App">
      <Products products={getAllProducts()} />
    </div>
  );
}

export default App;
