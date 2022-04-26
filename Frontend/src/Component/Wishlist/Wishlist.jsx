import React from "react";

function WishList() {
  let wishList = JSON.parse(localStorage.getItem("wishlist"));

  const removeFromWishlist = (e) => {
    const id = e.currentTarget.dataset.id;
    console.log(id)
    wishList = wishList?.filter((item) => item?._id !== id);
    localStorage.setItem("wishlist", JSON.stringify(wishList));
    window.location.reload();
  }

  return (
    <div className="container mb-4">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">productId</th>
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
          {wishList?.map((list, idx) => (
            <tr key={idx}>
              <th scope="row">{list._id}</th>
              <td>
                <img
                  style={{ width: "50px", height: "50px" }}
                  src={list?.imageUrl}
                  alt="img"
                />
              </td>
              <td>{list?.title}</td>
              <td>{list?.price}</td>
              <td onClick={removeFromWishlist} data-id={list._id} style={{color:'red',cursor:'pointer'}}>X</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WishList;