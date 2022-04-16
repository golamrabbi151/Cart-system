import React from "react";
import "./style.css";

function Products(params) {
  const { addItemToCart, products } = params;
  return (
    <div className="row">
      {products.map((data) => (
        <div
          className="col-md-2 col-sm-4 col-6"
          key={data.id}
          onClick={() => addItemToCart(data)}
        >
          <div className="rounded shadow border rounded p-2 mt-4">
            <img
              className="rounded float-start"
              src={`/product/${data.image}`}
              alt="..."
              style={{ maxWidth: "100%" }}
            />
            <p className="text-center text-break">{data.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
