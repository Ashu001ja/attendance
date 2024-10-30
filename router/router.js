const express = require('express');
const {sendAttendance,getAttendance}=require('../controller/controller');
const router=express.Router();

router.route('/senddata').post(sendAttendance);
router.route('/getdata').get(getAttendance);
module.exports=router;