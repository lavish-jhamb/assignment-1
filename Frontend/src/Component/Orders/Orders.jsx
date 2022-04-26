import React from "react";

function Orders() {
  const orders = JSON.parse(localStorage.getItem("order")) || [];

  return (
    <div className="container mt-5">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ProductId</th>
            <th scope="col">Address</th>
            <th scope="col">Contact No</th>
            <th scope="col">Status</th>
            <th scope="col">Placed at</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, idx) => (
            <tr key={idx}>
              <th scope="row">{idx}</th>
              <td>{order.address}</td>
              <td>{order.mobile}</td>
              <td>Not paid</td>
              <td>
                {order.placedAt}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;