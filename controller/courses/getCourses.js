const userService = require('../../services/coursesServices')
module.exports= async function(req,res){
    const data= await userService.getCourses();
    res.send(data);
}