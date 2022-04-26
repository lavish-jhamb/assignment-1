import React, { useEffect, useState } from 'react';
import "./Index.css";
import Card from '../Card/Card';
import { productController } from "../../Api/Products/controller"

function ProductList() {
    const[data,setData] = useState('');

    useEffect(() => {
        productController.getProducts()
        .then(res => setData(res?.data?.data))
    },[])

    return (
        <div className='productList'>
            {data.length > 0 && data?.map((item,idx) => (
                <Card key={idx} data={item} />
             ))}
        </div>
    );
}

export default ProductList;