const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);
const Product = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true
    },
    priceSale:{
        type:Number,
    },
    des:String,
    imagesUrl:[
        {
            type:String,
        },
    ],
    rating:{
        point:{
            type:Number,
            default:0
        },
        quantity:{
            type:Number,
            default:0
        }
    },
    categoryId:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Category'
        }
    ],
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
Product.plugin(toJSON);
Product.plugin(paginate);

module.exports=mongoose.model('Product',Product)
