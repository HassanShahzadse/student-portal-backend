const { Sequelize, Model,DataTypes } = require('sequelize');
let sequelize = require("../../common/dbConnection")
class Teacher extends Model {};
Teacher.init(
    {
        id:{
            primaryKey:true,
            autoIncrement:true,
            allowNull:false,
            type:DataTypes.INTEGER,
        },
        teacherId:{
            unique:true,
            allowNull:false,
            type:DataTypes.INTEGER,
        },

        officeLocation:{
            unique:true,
            allowNull:false,
            type:DataTypes.STRING(),
        },
        officeHours:{
            allowNull:false,
            type:DataTypes.STRING(),
        },   
        department:{
            allowNull:false,
            type:DataTypes.STRING(),
        },   
    },
    {
        timestamps:true,
        paranoid:true,
        sequelize: sequelize,
        modelName:"Teacher"
    }
)
module.exports = Teacher;