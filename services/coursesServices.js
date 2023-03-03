
const { models } = require('../model/definations');
 const userModel= require('../model/courseModel')

module.exports= {
createCourses: async function(body){
    const data = await userModel.createCourses(body);
    return data;
},
getCourses: async function(){
    const result = await userModel.getCourses();
    return result;
},
updateCourses: async function(body){

    const result = await userModel.updateCourses(body);
    return result;
},
getCoursesById: async function(body){

    const result = await userModel.getCoursesById(body);
    return result;
},
deleteCourses: async function(id){

    const result = await userModel.deleteCourses(id);
    return result;
},
}