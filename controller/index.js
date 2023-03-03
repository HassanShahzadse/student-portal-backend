

module.exports = {
    //user
    createUser: require("./users/createUser"),
    getUser: require("./users/getUser"),
    updateUser: require("./users/updateUser"),
    deleteUser: require("./users/deleteUser"),
    getUserById: require("./users/getUserById"),

    //roles
    // createRole: require("./common/role"),
    
    // login
    login:require('./common/login'),
    
    //Signup

    //logout

    //TimeTable

    //Courses
    createCourses: require("./courses/createCourses"),
    getCourses: require("./courses/getCourses"),
    updateCourses: require("./courses/updateCourses"),
    deleteCourses: require("./courses/deleteCourses"),
    getCoursesById: require("./courses/getCoursesById"),

    //Teachers
    createTeacher: require("./teacher/createTeacher"),
    getTeacher: require("./teacher/getTeacher"),
    updateTeacher: require("./teacher/updateTeacher"),
    deleteTeacher: require("./teacher/deleteTeacher"),
    getTeacherById: require("./teacher/getTeacherById"),
    //Admin

    //Student
    createStudent: require("./student/createStudent"),
    getStudent: require("./student/getStudent"),
    updateStudent: require("./student/updateStudent"),
    deleteStudent: require("./student/deleteStudent"),
    getStudentById: require("./student/getStudentById"),
    //Attendance


    
}