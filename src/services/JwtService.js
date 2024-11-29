const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config()
const generalAccessToken =(payload) =>{
    const access_token = jwt.sign({
        payload
    },process.env.ACCESS_TOKEN,{expires:'1h'}) 
    return access_token;
}

const  generalRefreshToken =(payload) =>{
    const refresh_token = jwt.sign({
        payload
    },process.env.REFRESH_TOKEN,{expires:'365d'}) 
    return refresh_token;
}
module.exports = {
    generalAccessToken,
    generalRefreshToken
}