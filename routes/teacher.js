var express = require('express');
var router = express.Router();


const { createTeacher,
    getTeacher,
    updateTeacher,
    deleteTeacher,
    getTeacherById 
} = require('../controller/index');


router.post('/createTeacher',createTeacher)
router.get('/getTeacher',getTeacher)
router.put('/updateTeacher',updateTeacher)
router.delete('/deleteTeacher',deleteTeacher)
router.get('/getTeacherById',getTeacherById)
module.exports = router;