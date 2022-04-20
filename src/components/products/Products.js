import React from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/actions/cart";
import "./style.css";

function Products(params) {
  const dispatch = useDispatch();
  const { products } = params;

  // Add to cart
  const addToCart = (data) => {
    const selectedProduct = {
      quantity: 1,
      ...data,
    };

    dispatch(addProduct(selectedProduct));
  };

  return (
    <div className="d-flex flex-row bd-highlight flex-wrap text-center mt-3">
      {products.map((data) => (
        <div
          className=" p-1 m-1 bd-highlight shadow-sm border productSection"
          key={data.id}
          onClick={() => addToCart(data)}
          role="button"
        >
          <div>
            <img
              className="rounded float-start text-center productImage"
              src={`/product/${data.image}`}
              alt={data.image}
            />
          </div>
          <p className="text-wrap">{data.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Products;
