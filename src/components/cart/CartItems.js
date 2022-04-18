import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  productsList,
  removeProduct,
  incrementQuantity,
} from "../../redux/actions/cart";
import { RiDeleteBin2Line, RiCloseFill } from "react-icons/ri";
import "./style.css";

function CartItems(props) {
  const dispatch = useDispatch();
  const [subTotal, setSubTotal] = useState(0);
  const [totalItem, setTotalItem] = useState(0);
  const { products } = useSelector((state) => state.products);

  console.log(totalItem);

  useEffect(() => {
    dispatch(productsList());
  }, [dispatch]);

  useEffect(() => {
    if (products && products.length > 0) {
      let preTotal = 0;
      let preTotalItem = 0;
      for (let i = 0; i < products.length; i++) {
        const element = products[i];
        preTotal += element.price * element.quantity;
        preTotalItem += element.quantity;
      }
      setSubTotal(preTotal);
      setTotalItem(preTotalItem);
    } else {
      setSubTotal(0);
      setTotalItem(0);
    }
  }, [products]);

  return (
    <div className="mt-3 block">
      <h1>Cart items</h1>
      <div>
        {/* <div className="d-flex justify-content-around">
          <div className="p-2">Name</div>
          <div className="p-2">Quantity</div>
          <div className="p-2">Price</div>
          <div className="p-2">add</div>
          <div className="p-2">remove</div>
        </div>
        {products && products.length > 0 ? (
          products.map((cart) => (
            <div key={cart.id}>
              <div className="d-flex justify-content-around">
                <div className="p-2">{cart.name}</div>
                <div className="p-2">{cart.quantity}</div>
                <div className="p-2">{cart.price.toFixed(2)}</div>
                <div className="p-2">
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => dispatch(incrementQuantity(cart.id))}
                  >
                    +
                  </button>
                </div>
                <div className="p-2">
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => dispatch(removeProduct(cart.id))}
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center pt-5">Cart is empty</div>
        )} */}

        <table class="table table-bordered text-wrap">
          <thead
            style={{
              backgroundColor: "#5991e3",
              borderColor: "#80808036",
              borderTop: "none !important",
              color: "white",
            }}
          >
            <tr className="text-center">
              <th scope="col-3">Product</th>
              <th scope="col-3">Price</th>
              <th scope="col-2">Quantity</th>
              <th scope="col-3">SubTotal</th>
              <th scope="col-1">
                <RiDeleteBin2Line size={20} />
              </th>
            </tr>
          </thead>
          <tbody>
            {products && products.length > 0 ? (
              products.map((cart) => (
                <tr key={cart.id}>
                  <td>{cart.name}</td>
                  <td>{cart.price.toFixed(2)}</td>
                  <td>
                    <input
                      type="number"
                      value={cart.quantity}
                      style={{ width: "50px" }}
                    />
                  </td>
                  <td>{cart.quantity * cart.price}</td>
                  <th>
                    <p
                      role="button"
                      onClick={() => dispatch(removeProduct(cart.id))}
                    >
                      <RiCloseFill size={19} />
                    </p>
                  </th>
                </tr>
              ))
            ) : (
              <div className="text-center pt-5">Cart is empty</div>
            )}
          </tbody>
        </table>
      </div>
      <div className="d-flex">
        <div className="p-2"> subTotal</div>
        <div className="p-2"> totalItem</div>
      </div>
      <div className="d-flex">
        <div className="p-2">{subTotal ? subTotal : 0}</div>
        <div className="p-2">{totalItem ? totalItem : 0}</div>
      </div>
    </div>
  );
}

export default CartItems;
