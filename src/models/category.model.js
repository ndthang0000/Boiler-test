const mongoose = require('mongoose');
const { toJSON } = require('./plugins');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);
const Category = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    },
    slug:{
        type:String,
        slug:"name",
        unique:true
    }
    },
    {
        timestamps: true,
    }
);

// add plugin that converts mongoose to json
Category.plugin(toJSON);

module.exports=mongoose.model('Category',Category)
