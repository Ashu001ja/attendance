const express = require('express');
const PORT =process.env.PORT || 7000;
const connectDB = require('./db/db');
const router = require('./router/router');
const app = express();
app.use(express.json());

app.use(router);

const Start=async()=>{ 
    try{
        await connectDB();
         app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    }catch(error){
        console.error(`Error starting server: ${error}`);
    }
}; 

Start();