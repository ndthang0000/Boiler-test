const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const {categoryService} =require('../services')

const getAllCategory = catchAsync(async (req, res) => {
    const categorys=await categoryService.getAllCategory()
    res.status(httpStatus.OK).send({ categorys });
});

const createCategory = catchAsync(async (req, res) => {
    const category=await categoryService.createCategory(req.body)
    res.status(httpStatus.OK).send({ category });
});

const getOneCategory = catchAsync(async (req, res) => {
    const category=await categoryService.getOneCategory(req.params.id)
    res.status(httpStatus.OK).send({ category });
});

const updateCategory = catchAsync(async (req, res) => {
    const category=await categoryService.updateOneCategory(req.params.id,req.body)
    res.status(httpStatus.OK).send({ category });
});


module.exports = {
    getAllCategory,
    createCategory,
    getOneCategory,
    updateCategory
};
