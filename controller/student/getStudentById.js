const userService = require('../../services/studentServices')
module.exports= async function(req,res){
    const data= await userService.getStudentById(req.query.ids);
    res.send(data);
}