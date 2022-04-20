import { Modal, Button } from "react-bootstrap";
import "./style.css";

function ProductModal(props) {
  const { handleClose, show, products, totalItem, subTotal } = props;
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Cart product preview</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <table className="table table-bordered text-wrap">
          <thead className="tableHeaderPreview">
            <tr className="text-center">
              <th scope="col-3">Product</th>
              <th scope="col-3">Price</th>
              <th scope="col-2">Quantity</th>
              <th scope="col-3">SubTotal</th>
            </tr>
          </thead>
          <tbody>
            {products && products.length > 0 ? (
              products.map((cart) => (
                <tr key={cart.id} className="text-center">
                  <td>{cart.name}</td>
                  <td>{cart.price.toFixed(2)}</td>
                  <td>{cart.quantity}</td>
                  <td>{cart.quantity * cart.price}</td>
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
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProductModal;
