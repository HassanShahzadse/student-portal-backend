const {models} = require("../model/definations")
const { Op } = require("sequelize");
module.exports = {
    createCourses: async function(body){

        const result = await models.Courses.create(body);
        return result;
    },
    getCourses: async function(){

        const result = await models.Courses.findAll({
        });
        return result;
    },
    getCoursesById: async function(ids){

        const result = await models.Courses.findAll({
            where:{id:ids},
        });
        return result;
    },
    updateCourses: async function(body){
        
        const result = await models.Courses.update(
        {
        ...body
        },
        {
            where : {id: body.id}
        }
        );
        return result;
    },
    deleteCourses: async function(id){
        
        const result = await models.Courses.destroy(
            {
                where : {id:id}
            }
       
        );
        return "Deleted a Course";
    },
    //validation
    // getUserByAttribute  : async function(body){
	// 	const result = await models.User.findAndCountAll({
	// 		where: {
	// 			[Op.or]: [
	// 			  { userName: body.userName },
	// 			  { email: body.email },
	// 			  { phoneNumber : body.phoneNumber}
	// 			]
	// 		  }
	// 	});
	// 	return result;
// },


}