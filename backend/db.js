const mongoose = require('mongoose');

module.exports = () =>{
    try{
        mongoose.connect(process.env.DB);
        console.log("connected database mongodb");
    }
    catch(error){
        console.log(error);
        console.log("could not connnect to database!");
        
    }
}