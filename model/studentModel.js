const {models} = require("../model/definations")
const { Op } = require("sequelize");
module.exports = {
    createStudent: async function(body){

        const result = await models.Student.create(body);
        return result;
    },
    getStudent: async function(){

        const result = await models.Student.findAll({
        });
        return result;
    },
    getStudentById: async function(ids){

        const result = await models.Student.findAll({
            where:{id:ids},
        });
        return result;
    },
    updateStudent: async function(body){
        
        const result = await models.Student.update(
        {
        ...body
        },
        {
            where : {id: body.id}
        }
        );
        return result;
    },
    deleteStudent: async function(id){
        
        const result = await models.Student.destroy(
            {
                where : {id:id}
            }
       
        );
        return "Deleted a Student";
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