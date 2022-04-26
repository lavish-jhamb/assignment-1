import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();

  const [loc, setLoc] = useState({ address: "", mobile: "" });

  let cartItem = JSON.parse(localStorage.getItem("cart"));

  const removeFromCart = (e) => {
    const id = e.currentTarget.dataset.id;
    cartItem = cartItem?.filter((item) => item?._id !== id);
    localStorage.setItem("cart", JSON.stringify(cartItem));
    window.location.reload();
  };

  const calcTotalAmount = () => {
    const totalAmount = cartItem?.reduce((acc, curr) => {
      return acc + curr.price * curr.quantity;
    }, 0);
    return totalAmount;
  };

  const inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoc({
      ...loc,
      [name]: value,
    });
  };

  const handleOrder = () => {
    if (!loc.address || !loc.mobile) {
      return;
    }
    const date = new Date();
    let order = JSON.parse(localStorage.getItem('order')) || [];
    order.push({...loc,placedAt:date.getHours() + ':' + date.getMinutes()});
    localStorage.setItem('order',JSON.stringify(order));

    return navigate("/orders");
  };

  return (
    <>
      <div className="container padding-bottom-3x mb-1">
        <div className="text-center" style={{ marginBottom: "30px" }}></div>
        <div className="table-responsive shopping-cart">
          <table className="table">
            <thead>
              <tr>
                <th>Product Name</th>
                <th className="text-center">Quantity</th>
                <th className="text-center">Subtotal</th>
                <th className="text-center">Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItem?.length > 0 &&
                cartItem?.map((item, idx) => (
                  <tr key={idx}>
                    <td>
                      <div className="product-item">
                        <div className="product-info">
                          <h4 className="product-title">
                            <a href="!#">{item?.title}</a>
                          </h4>
                        </div>
                      </div>
                    </td>
                    <td className="text-center">
                      <div className="count-input">{item?.quantity}</div>
                    </td>
                    <td className="text-center text-lg text-medium">
                      Rs {item?.price}
                    </td>
                    <td
                      onClick={removeFromCart}
                      data-id={item?._id}
                      style={{ color: "red", cursor: "pointer" }}
                      className="text-center text-lg text-medium"
                    >
                      x
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="shopping-cart-footer text-center">
          <span style={{ textAlign: "center" }}>
            totalAmount: {calcTotalAmount()}
          </span>
          <div style={{ textAlign: "right" }} className="column">
            <div className="mb-2">
              <input
                onChange={inputHandler}
                name="address"
                type="text"
                placeholder="address"
              />
            </div>
            <div>
              <input
                onChange={inputHandler}
                name="mobile"
                type="text"
                placeholder="mobile no."
              />
            </div>
            <button
              onClick={handleOrder}
              className="btn btn-outline-primary btn-sm mt-2"
              type="submit"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;