const userService = require('../../services/coursesServices')
module.exports= async function(req,res){
    const data= await userService.deleteCourses(req.query.id);
    res.send(data);
}