const UserService = require('../services/UserService')

const createUser = async(req,res) => {
    try{
        console.log(req.body);
        const {name,email, password, role, phone} = req.body
        const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        const isCheckEmail = reg.test(email)
        if(!name||!email||!password||!phone)
        {
            return res.status(200).json(
                {
                    status:"ERR",
                    message: 'Missing required fields'});
        }else if(!isCheckEmail){
            return res.status(200).json(
                {
                    status:"ERR",
                    message: 'The email is invalid'})
        }else if(!role){ 
            return res.status(200).json(
                {
                    status:"ERR",
                    message: 'Role does not exist'});
        }
        // console.log('isCheckEmail',isCheckEmail);
        const respone = await UserService.createUser(req.body);
        return res.status(200).json(respone);
    }catch(err){
    return res.status(404).json(
        {message:err
    });
    }
};

const loginUser = async(req,res) => {
    try{
        console.log(req.body);
        const {name,email,password,phone} = req.body
        const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        const isCheckEmail = reg.test(email)
        if(!name||!email||!password||!phone)
        {
            return res.status(200).json(
                {
                    status:"ERR",
                    message: 'Missing required fields'});
        }else if(!isCheckEmail){
            return res.status(200).json(
                {
                    status:"ERR",
                    message: 'The email is invalid'})
        }
        // console.log('isCheckEmail',isCheckEmail);
        const respone = await UserService.loginUser(req.body);
        return res.status(200).json(respone);
    }catch(err){
    return res.status(404).json(
        {message:err
    });
    }
};

const updateUser = async(req,res) => {
    try{
       
        return res.status(200).json(res);
    }catch(e){
        return res.status(404).json(
            {message:e
        });
    } 
};

module.exports = {
    createUser,
    loginUser,
    updateUser
};  