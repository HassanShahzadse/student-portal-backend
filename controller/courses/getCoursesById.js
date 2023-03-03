const userService = require('../../services/coursesServices')
module.exports= async function(req,res){
    const data= await userService.getCoursesById(req.query.ids);
    res.send(data);
}