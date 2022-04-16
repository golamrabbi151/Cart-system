function CartItems(props) {
  const { addItemToCart, cartData, removeItemToCart } = props;
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
        {cartData.length ? (
          cartData.map((cart) => (
            <div key={cart.id}>
              <div className="d-flex justify-content-around">
                <div className="p-2">{cart.name}</div>
                <div className="p-2">{cart.quantity}</div>
                <div className="p-2">{cart.price}</div>
                <div className="p-2">
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => addItemToCart(cart)}
                  >
                    +
                  </button>
                </div>
                <div className="p-2">
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => removeItemToCart(cart)}
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
