const mongoose = require('mongoose');
const productSchema = new mongoose.Schema(
{
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    image: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
        trim: true,
        minlength: 8,
        select: false
    },
    price: {
        type: Number,
        required: true,
    },
    countInStock:{
        type: Number,
        required: true,
    },

    rating:{
        type: Number,
        required: true,
    },
    decription:{
        type: String,
        required: true,
    }
},
{
    timestamps:true
}
);
const Product = mongoose.model('Product',productSchema);
module.exports = Product;