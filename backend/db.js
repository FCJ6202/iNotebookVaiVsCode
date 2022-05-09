const mongoose = require('mongoose');
const mongoUrl = "mongodb+srv://FCJ1234:03kL405cRSOaCQwb@cluster0.zwfl2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"



const connectToDatabase = () =>{
    mongoose.connect(mongoUrl,{
        useNewUrlParser : true,
        useUnifiedTopology : true
    },() =>{
        console.log("database connected successfully");
    })
}

module.exports = connectToDatabase;