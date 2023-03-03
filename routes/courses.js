var express = require('express');
var router = express.Router();


const { createCourses,
    getCourses,
    updateCourses,
    deleteCourses,
    getCoursesById 
} = require('../controller/index');


router.post('/createCourses',createCourses)
router.get('/getCourses',getCourses)
router.put('/updateCourses',updateCourses)
router.delete('/deleteCourses',deleteCourses)
router.get('/getCoursesById',getCoursesById)
module.exports = router;