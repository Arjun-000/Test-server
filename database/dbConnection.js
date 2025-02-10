const mongoose = require('mongoose')

const connectionString = process.env.DBCONNECTIONSTRING

mongoose.connect(connectionString).then(res=>{
    console.log("Connected sucessfull")
}).catch(err=>{
    console.log("Connection failed")
    console.log(err);
    
})