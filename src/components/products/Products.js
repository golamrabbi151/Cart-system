import React from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/actions/cart";

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
          className=" p-1 m-1 bd-highlight shadow-sm border "
          key={data.id}
          onClick={() => addToCart(data)}
          style={{ width: "100px" }}
          role="button"
        >
          <div>
            <img
              className="rounded float-start text-center"
              src={`/product/${data.image}`}
              alt="..."
              style={{ width: "92px" }}
            />
          </div>
          <p
            className="text-wrap"
            style={{ fontSize: "13px", paddingBottom: "0px !important" }}
          >
            {data.name}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Products;
