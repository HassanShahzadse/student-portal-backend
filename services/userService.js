 const bcrypt=require('bcrypt');
const { models } = require('../model/definations');
 const userModel= require('../model/userModel')

module.exports= {
    createUser : async function(body){
        body.password = await bcrypt.hashSync(body.password, 10);
        const user = await userModel.getUserByAttribute(body);
        if(user.count!=0){
            return "user already exists!"
        }
        
        const data =  await userModel.createUser(body);
        return data;
    },
getUser: async function(){

    const result = await userModel.getUser();
    return result;
},
updateUser: async function(body){

    const result = await userModel.updateUser(body);
    return result;
},
getUserById: async function(ids){

    const result = await userModel.getUserById(ids);
    return result;
},
deleteUser: async function(id){

    const result = await userModel.deleteUser(id);
    return result;
},
}