const httpStatus = require('http-status');
const { Category } = require('../models');
const ApiError = require('../utils/ApiError');

const createCategory = async (categoryBody) => {
    return Category.create(categoryBody);
};

const getAllCategory = async () => {
    return Category.find({});
};

const getOneCategory = async (id) => {
    const category=await Category.findOne({_id:id})
    if(!category){
        throw new ApiError(httpStatus.BAD_REQUEST,'Category is not exist')
    }
    return category
};

const updateOneCategory = async (id,categoryBody) => {
    const category=await Category.updateOne({_id:id},categoryBody)
    return category
};


module.exports = {
    getAllCategory,
    createCategory,
    getOneCategory,
    updateOneCategory
};
