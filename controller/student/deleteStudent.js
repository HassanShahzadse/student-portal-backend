const userService = require('../../services/studentServices')
module.exports= async function(req,res){
    const data= await userService.deleteStudent(req.query.id);
    res.send(data);
}