const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const {productService} =require('../services')

const getAllProduct = catchAsync(async (req, res) => {
  const products=await productService.getAllProduct()
  res.status(httpStatus.OK).send({ products });
});


const createProduct = catchAsync(async (req, res) => {
  const newProduct=await productService.createProduct(req.body)
  res.status(httpStatus.CREATED).send({ success:true,newProduct });
});

const getProductById = catchAsync(async (req, res) => {
  const newProduct=await productService.findOneProduct(req.params.id)
  res.status(httpStatus.CREATED).send({ newProduct });
});

const deleteProduct = catchAsync(async (req, res) => {
  const data=await productService.deleteProduct(req.params.id)
  res.status(httpStatus.OK).send({ data });
});

const updateProduct = catchAsync(async (req, res) => {
  const product=await productService.updateProduct(req.params.id,req.body)
  res.status(httpStatus.OK).send({ product });
});

module.exports = {
  getAllProduct,
  createProduct,
  getProductById,
  deleteProduct,
  updateProduct
};
