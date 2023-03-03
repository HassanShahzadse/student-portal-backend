const {models} = require("../model/definations")
const { Op } = require("sequelize");
module.exports = {
    createTeacher: async function(body){

        const result = await models.Teacher.create(body);
        return result;
    },
    getTeacher: async function(){

        const result = await models.Teacher.findAll({
        });
        return result;
    },
    getTeacherById: async function(ids){

        const result = await models.Teacher.findAll({
            where:{id:ids},
        });
        return result;
    },
    updateTeacher: async function(body){
        
        const result = await models.Teacher.update(
        {
        ...body
        },
        {
            where : {id: body.id}
        }
        );
        return result;
    },
    deleteTeacher: async function(id){
        
        const result = await models.Teacher.destroy(
            {
                where : {id:id}
            }
       
        );
        return "Deleted a Teacher";
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