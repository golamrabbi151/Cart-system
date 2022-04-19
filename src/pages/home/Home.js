import React, { useState } from "react";
import { getProducts } from "../../data";
import Products from "../../components/products/Products";
import CartItems from "../../components/cart/CartItems";
function Home() {
  const products = getProducts();
  const [cartData, setCartData] = useState([]);

  const addItemToCart = (product) => {
    const exist = cartData.find((item) => item.id === product.id);
    if (exist) {
      setCartData(
        cartData.map((data) =>
          data.id === product.id
            ? { ...exist, quantity: exist.quantity + 1 }
            : data
        )
      );
    } else {
      setCartData([...cartData, { ...product, quantity: 1 }]);
      console.log("cartData: ", cartData);
    }
  };

  const removeItemToCart = (product) => {
    const exist = cartData.find((item) => item.id === product.id);
    if (exist.quantity === 1) {
      setCartData(cartData.filter((x) => x.id !== product.id));
    } else {
      setCartData(
        cartData.map((item) =>
          item.id === product.id
            ? { ...exist, quantity: exist.quantity - 1 }
            : item
        )
      );
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4 overflow-auto">
          <CartItems
            addItemToCart={addItemToCart}
            cartData={cartData}
            removeItemToCart={removeItemToCart}
          />
        </div>
        <div className="col-md-8">
          <Products addItemToCart={addItemToCart} products={products} />
        </div>
      </div>
    </div>
  );
}

export default Home;
