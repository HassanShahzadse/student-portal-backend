const { Sequelize, Model,DataTypes } = require('sequelize');
let sequelize = require("../../common/dbConnection")
class Courses extends Model {};
Courses.init(
    {
        id:{
            primaryKey:true,
            autoIncrement:true,
            allowNull:false,
            type:DataTypes.INTEGER,
        },

        courseTitle:{
            unique:true,
            allowNull:false,
            type:DataTypes.STRING(),
        },   
        courseCode:{
            allowNull:false,
            type:DataTypes.STRING(),
        },   
        creditHours:{
            allowNull:false,
            type:DataTypes.INTEGER,
        },
        lab:{
            allowNull:false,
            type:DataTypes.BOOLEAN,
        },
    },
    {
        timestamps:true,
        paranoid:true,
        sequelize: sequelize,
        modelName:"Courses"
    }
)
module.exports = Courses;