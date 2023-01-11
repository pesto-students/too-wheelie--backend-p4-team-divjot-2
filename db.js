const mongoose=require('mongoose');

function connectDB(){
    mongoose.connect('mongodb+srv://gopal_7:Akt%4069731999@cluster0.ehz8oxq.mongodb.net/TooWheelie',{useUnifiedTopology:true,useNewUrlParser:true})

    const connection=mongoose.connection

    connection.on('connected',()=>{
        console.log('Mongo DB connected')
    })

    connection.on('error',()=>{
        console.log('mongoDB connection error')
    })
}

connectDB()

module.exports=mongoose