import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  productsList,
  removeProduct,
  incrementQuantity,
  decrementQuantity,
} from "../../redux/actions/cart";

function CartItems(props) {
  const { addItemToCart, cartData, removeItemToCart } = props;
  const dispatch = useDispatch();
  const [subTotal, setSubTotal] = useState(0);
  const [totalItem, setTotalItem] = useState(0);
  const { products } = useSelector((state) => state.products);

  console.log(totalItem)

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
        preTotalItem += element.quantity
      }

      setSubTotal(preTotal);
      setTotalItem(preTotalItem)
    }
  }, [products]);

  return (
    <div className="mt-3 block">
      <h1>Cart items</h1>
      <div>
        <div className="d-flex justify-content-around">
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
        )}
      </div>
    </div>
  );
}

export default CartItems;
