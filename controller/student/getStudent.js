const userService = require('../../services/studentServices')
module.exports= async function(req,res){
    const data= await userService.getStudent();
    res.send(data);
}