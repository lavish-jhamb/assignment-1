import React, { useState } from "react";
import "./Index.css";

function Card({ data }) {
  const [error,setError] = useState('');

  const isAuth = JSON.parse(localStorage.getItem("auth"));

  const addToCart = (e) => {
    const cardSelect = JSON.parse(e.currentTarget.dataset.item);
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    const cartFind = cart?.find(item => item?._id === cardSelect?._id);
    if(cartFind?._id){
        cartFind.quantity++
    }else{
      cart.push({...cardSelect,quantity:1});
    }

    localStorage.setItem('cart',JSON.stringify(cart));
  };

  const addToWishlist = (e) => {
    const cardSelect = JSON.parse(e.currentTarget.dataset.item);
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    
    const cartFind = wishlist?.find(item => item?._id === cardSelect?._id);
    if(cartFind?._id){
        setError('product already in wishList!')
    }else{
      wishlist.push(cardSelect);
    }

    localStorage.setItem('wishlist',JSON.stringify(wishlist));
  }

  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        {error && <p>{error}</p>}
        <img src={data?.imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{data?.title}</h5>
          <p className="card-text">{data.description}</p>
          <p className="card-text">Rs.{data.price}</p>
          <a href={`product/  ${data?._id}`} className="btn btn-primary btn-sm">
            Details
          </a>
          {isAuth && (
            <span>
            <a
            href="#!"
            className="btn btn-outline-primary btn-sm addToCart"
            data-item={JSON.stringify(data)}
            onClick={addToCart}
            >
              Add to cart
            </a>
                <a
                  href="#!"
                  className="btn btn-outline-primary btn-sm addToCart"
                  data-item={JSON.stringify(data)}
                  onClick={addToWishlist}
                  >
                    +
                  </a>
                  </span>
          )}
        </div>
      </div>
    </>
  );
}

export default Card;