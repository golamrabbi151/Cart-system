import React from "react";
import { getProducts } from "../../data";
import Products from "../../components/products/Products";
import CartItems from "../../components/cart/CartItems";
function Home() {
  const products = getProducts();
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4 overflow-auto">
          <CartItems />
        </div>
        <div className="col-md-8">
          <Products products={products} />
        </div>
      </div>
    </div>
  );
}

export default Home;
