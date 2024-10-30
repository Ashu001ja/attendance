const dataSechema=require('../model/model');


const sendAttendance=(req,res)=>{
    const {sclass,atime,pstudent}=req.body;
    const newAttendance=new dataSechema({sclass,atime,pstudent,date:new Date().toLocaleDateString()  });
    newAttendance.save()
    res.json({msg:"Attendance saved successfully"})
};

const getAttendance = async (req, res) => {
    const { date } = req.query;
  
    if (!date) {
      return res.status(400).send({ error: "Date is required" });
    }
  
    try {
      const data = await dataSechema.find({ date: date });
      
      if (data.length === 0) {
        return res.status(404).send({ message: "No data found for the selected date" });
      }
  
      res.json(data);
    } catch (error) {
      res.status(500).send({ error: 'An error occurred while fetching attendance data.' });
    }
  };
  
module.exports={sendAttendance,getAttendance};