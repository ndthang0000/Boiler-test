const httpStatus = require('http-status');
const { Product } = require('../models');
const ApiError = require('../utils/ApiError');

const createProduct = async (productBody) => {
    return Product.create(productBody);
};

const getAllProduct=async() => {
    const products=await Product.find({})
    return products
}

const findOneProduct=async(id) => {
    const product=await Product.findOne({_id:id})
    if(!product){
        throw new ApiError(httpStatus.BAD_REQUEST, 'Product is not exist');
    }
    return product
}

const deleteProduct=async(id) => {
    const data=await Product.deleteOne({_id:id})
    return data
}

const updateProduct=async(id,productBody) => {
    const product=await Product.updateOne({_id:id},productBody)
    return product
}

module.exports = {
    getAllProduct,
    createProduct,
    findOneProduct,
    deleteProduct,
    updateProduct
};
