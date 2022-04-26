import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { productController } from "../../Api/Products/controller";

function ProductDetail() {
const navigate = useNavigate();
    const [data,setData] = useState([]);

    const path = window.location.pathname.split('%')[2].slice(2);
    const singleProduct = data?.find(item => item._id === path);

    useEffect(() => {
        productController.getProducts()
        .then(res => setData(res?.data?.data))
    },[])

    const goBack = () => {
        navigate(-1);
    }

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="container-fliud">
          <div className="wrapper row">
            <div className="preview col-md-6">
              <div className="preview-pic tab-content">
                <div className="tab-pane active" id="pic-1">
                  <img src={`/${singleProduct?.imageUrl}`} alt="img" />
                </div>
              </div>
            </div>
            <div className="details col-md-6">
              <h3 className="product-title">{singleProduct?.title}</h3>
              <p className="product-description">
   {singleProduct?.description}
              </p>
              <h4 className="price">
                current price: <span>Rs {singleProduct?.price}</span>
              </h4>
              <p className="vote">
                <strong>91%</strong> of buyers enjoyed this product!{" "}
                <strong>(87 votes)</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
      <button onClick={goBack} className="btn btn-primary mt-5" >Go back</button>
    </div>
  );
}

export default ProductDetail;