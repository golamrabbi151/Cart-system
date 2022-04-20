import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../../redux/actions/cart";
import {
  productsList,
  removeProduct,
  // incrementQuantity,
} from "../../redux/actions/cart";
import { getProductByName } from "../../data";
import {
  RiDeleteBin2Line,
  RiCloseFill,
  RiPencilFill,
  RiEyeFill,
  RiAddCircleFill,
} from "react-icons/ri";
import "./style.css";

function CartItems(props) {
  const dispatch = useDispatch();
  const [subTotal, setSubTotal] = useState(0);
  const [totalItem, setTotalItem] = useState(0);
  const [searchItem, setSearchItems] = useState([]);
  const { products } = useSelector((state) => state.products);
  console.log(searchItem);

  // Add to cart
  const addToCart = () => {
    console.log("click on add");
    const searchProduct = getProductByName(searchItem);
    if (searchProduct) {
      const selectedProduct = {
        quantity: 1,
        ...searchProduct,
      };

      dispatch(addProduct(selectedProduct));
    }
  };

  useEffect(() => {
    dispatch(productsList());
  }, [dispatch]);

  const notify = () => toast.success("Order complete successfuly");
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
    <div className="mt-3 block" style={{ height: "100vh" }}>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="" />
        <span className="input-group-text" role="button">
          <RiPencilFill />
        </span>
        <span className="input-group-text" role="button">
          <RiEyeFill />
        </span>
        <span className="input-group-text" role="button">
          <RiAddCircleFill />
        </span>
      </div>
      {/* select */}
      <div className="mb-3">
        <select className="form-select" aria-label="Default select example">
          <option>Select warehouse</option>
          <option value="1">warehouse one</option>
          <option value="2">warehouse two</option>
          <option value="3">warehouse three</option>
        </select>
      </div>
      <div className="input-group mb-3">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Search product by name"
          onChange={(e) => setSearchItems(e.target.value)}
          defaultValue={searchItem}
        />
        <span
          className="input-group-text"
          role="button"
          onClick={() => addToCart()}
        >
          <RiAddCircleFill />
        </span>
      </div>
      <div>
        <table className="table table-bordered text-wrap">
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
              <tr>
                <td colSpan={5}>
                  <div className="text-center pt-3 ">
                    <img src="./noData.png" alt="..." width={100} />
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <table className="table table-bordered">
          <thead></thead>
          <tbody>
            <tr>
              <td colSpan="2">
                <span className="float-start">Items</span>
                <span className="float-end">{totalItem ? totalItem : 0}</span>
              </td>
              <td colSpan="3">
                <span className="float-start">Total</span>
                <span className="float-end">
                  {subTotal ? subTotal.toFixed(2) : 0.0}
                </span>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <span className="float-start">OrderTax</span>
                <span className="float-end">0.00</span>
              </td>
              <td colSpan="3">
                <span className="float-start">Discount</span>
                <span className="float-end">0.00</span>
              </td>
            </tr>
          </tbody>
        </table>
        <table className="table">
          <tr>
            <td colSpan="5" style={{ background: "#3c3a3a", color: "white" }}>
              <span className="float-start">Total Payable</span>
              <span className="float-end">
                {subTotal ? subTotal.toFixed(2) : 0.0}
              </span>
            </td>
          </tr>
          <tr>
            <td className="bg-warning text-center">
              <div style={{ width: "100%", color: "white" }} role="button">
                Suspend
              </div>
            </td>
            <td className="bg-info text-center">
              <div style={{ width: "100%", color: "white" }} role="button">
                Order
              </div>
            </td>
            <td rowSpan="2" className="bg-success text-center" role="button">
              <div
                style={{ width: "100%", color: "white" }}
                onClick={() => (subTotal ? notify() : "")}
              >
                Payment
              </div>
            </td>
          </tr>
          <tr>
            <td className="bg-danger text-center">
              <div style={{ width: "100%", color: "white" }} role="button">
                Cancle
              </div>
            </td>
            <td className="bg-primary text-center">
              <div style={{ width: "100%", color: "white" }} role="button">
                Bill
              </div>
            </td>
          </tr>
        </table>
        <ToastContainer />
      </div>
    </div>
  );
}

export default CartItems;
