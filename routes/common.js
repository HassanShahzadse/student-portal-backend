var express = require('express');
var router = express.Router();


const { login } = require('../controller/index');



// router.post('/createRole',createRole)
router.post('/login',login)
module.exports = router;