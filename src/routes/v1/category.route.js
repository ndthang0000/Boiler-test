const express = require('express');
const {categoryController} = require('../../controllers');
const validate = require('../../middlewares/validate');
const {categoryValidation} = require('../../validations');
const auth = require('../../middlewares/auth')
const router = express.Router();



router
    .route('/')
    .get(categoryController.getAllCategory)
    .post(auth('editProduct'),validate(categoryValidation.createCategory),categoryController.createCategory)
router
    .route('/:id')
    .get(auth('editProduct'),validate(categoryValidation.getOneCategory),categoryController.getOneCategory)
    .patch(auth('editProduct'),validate(categoryValidation.update),categoryController.updateCategory)


module.exports = router;