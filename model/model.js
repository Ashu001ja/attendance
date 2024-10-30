const  mongoose=require('mongoose');

const AttendanceSchema=new mongoose.Schema({
    sclass:{
        type:String,
        required:true
    },
    atime:{
        type:String,
        required:true
    },
    pstudent:{
        type:String,
        required:true
    },
    date:{
        type:String,
    }
});

module.exports=mongoose.model('Attendance',AttendanceSchema);