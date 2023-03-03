
const { models } = require('../model/definations');
 const userModel= require('../model/teacherModel')

module.exports= {
createTeacher: async function(body){
    const data = await userModel.createTeacher(body);
    return data;
},
getTeacher: async function(){
    const result = await userModel.getTeacher();
    return result;
},
updateTeacher: async function(body){

    const result = await userModel.updateTeacher(body);
    return result;
},
getTeacherById: async function(body){

    const result = await userModel.getTeacherById(body);
    return result;
},
deleteTeacher: async function(id){

    const result = await userModel.deleteTeacher(id);
    return result;
},
}