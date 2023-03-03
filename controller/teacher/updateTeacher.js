const userService = require('../../services/teacherServices')
module.exports= async function(req,res){
    const data= await userService.updateTeacher(req.body);
    res.send(data);
}