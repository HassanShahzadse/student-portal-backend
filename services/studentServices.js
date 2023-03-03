
const { models } = require('../model/definations');
 const userModel= require('../model/studentModel')

module.exports= {
createStudent: async function(body){
    const data = await userModel.createStudent(body);
    return data;
},
getStudent: async function(){
    const result = await userModel.getStudent();
    return result;
},
updateStudent: async function(body){

    const result = await userModel.updateStudent(body);
    return result;
},
getStudentById: async function(body){

    const result = await userModel.getStudentById(body);
    return result;
},
deleteStudent: async function(id){

    const result = await userModel.deleteStudent(id);
    return result;
},
}