const User = require('../models/UserModel');
const bcrypt = require('bcrypt');

const createUser = (newUser)=> {
    return new Promise( async(resolve,reject)=>{
        const {name,email,password,role, phone} = newUser
            try{
                const checkUser = await User.findOne({
                    email:email
                })
                if(checkUser!==null){
                    resolve({
                        status:'OK',
                        message:"The email address is already"
                    })
                }
            const hash = bcrypt.hashSync(password, 10)
            const createdUser =  await User.create({ 
                name,
                email,
                role,
                password:hash,
                phone
            })
            if(createdUser){
                resolve({
                 status:'OK',
                 message:"SUCCESS",
                 data:createdUser
                })
            }
        }
        catch(e){
            reject(e);
        }
})
}

const loginUser = (userLogin)=> {
    return new Promise( async(resolve,reject)=>{
        const {name,email,password,phone} = userLogin
            try{
                const checkUser = await User.findOne({
                    email:email
                })
                if(checkUser === null){
                    resolve({
                        status:'OK',
                        message:"The user is not define"
                    })
                }
                const comparePassword = bcrypt.compareSync(password,checkUser.password)
                if(!comparePassword){
                    resolve({
                        status:'OK',
                        message:"The user or password is not correct"
                    })
                }
            
                const access_token = await generalAccessTokens({
                    id : checkUser.id,
                    isAdmin:checkUser.isAdmin
                })

                const refresh_token = await generalRefreshTokens({
                    id : checkUser.id,
                    isAdmin:checkUser.isAdmin
                })

                console.log('access_token',access_token)
                resolve({
                 status:'OK',
                 message:"SUCCESS",
                 access_token,
                 refresh_token
                })
        }
        catch(e){
            reject(e);
        }
})
}

module.exports ={
    createUser,
    loginUser
}