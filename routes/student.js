var express = require('express');
var router = express.Router();


const { createStudent,
    getStudent,
    updateStudent,
    deleteStudent,
    getStudentById 
} = require('../controller/index');


router.post('/createStudent',createStudent)
router.get('/getStudent',getStudent)
router.put('/updateStudent',updateStudent)
router.delete('/deleteStudent',deleteStudent)
router.get('/getStudentById',getStudentById)
module.exports = router;