const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema(
{
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: Number,
        default: 2,
        required: true
    },
    phone:{
        type: String,
        required: true,
    }
    // access_token:{
    //     type: String,
    //     required: true,
    // },
    // refresh_token:{
    //     type: String,
    //     required: true,
    // }
},
{
    timestamps:true
}
);

const User = mongoose.model('user',userSchema);

module.exports = User;