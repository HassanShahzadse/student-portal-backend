const userService = require('../../services/coursesServices')
module.exports= async function(req,res){
    const data= await userService.createCourses(req.body);
    res.send(data);
}