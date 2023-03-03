const userService = require('../../services/studentServices')
module.exports= async function(req,res){
    const data= await userService.updateStudent(req.body);
    res.send(data);
}