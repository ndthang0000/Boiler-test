const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createProduct = {
    body: Joi.object().keys({
        name: Joi.string().required(),
        price:Joi.number().integer().required(),
        priceSale: Joi.number().integer(),
        des:Joi.string(),
        categoryId:Joi.array().items(Joi.string().custom(objectId)),
    }),
};

const getProductById = {
    parasm: Joi.object().keys({
        id:Joi.string().custom(objectId)
    }),
};

const updateProduct = {
    parasm: Joi.object().keys({
        id:Joi.string().custom(objectId)
    }),
    body:Joi.object().keys({
        name: Joi.string(),
        price:Joi.number().integer(),
        priceSale: Joi.number().integer(),
        des:Joi.string(),
        categoryId:Joi.array().items(Joi.string().custom(objectId)),
    })
};


module.exports = {
    createProduct,
    getProductById,
    updateProduct
};
