const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createCategory = {
    body: Joi.object().keys({
        name: Joi.string().required(),
        imageUrl:Joi.string()
    }),
};

const getOneCategory = {
    params: Joi.object().keys({
        id:Joi.string().custom(objectId)
    }),
};

const update = {
    params: Joi.object().keys({
        id:Joi.string().custom(objectId)
    }),
    body:Joi.object().keys({
        name: Joi.string(),
        imageUrl:Joi.string()
    })
};



module.exports = {
    createCategory,
    getOneCategory,
    update
}
