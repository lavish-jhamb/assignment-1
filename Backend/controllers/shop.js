const Product = require('../models/product');
const User = require('../models/user');

exports.getProducts = async (req,res) => {
    const products = await Product.find();
    if(!products){
        res.status(404).json({
            success:false,
            message:'product could not find',
            data:[]
        })
    }

    res.status(200).json({
        success:false,
        message:'product could not find',
        data:products
    })
}