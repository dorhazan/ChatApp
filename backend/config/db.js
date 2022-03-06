const  mongoose = require("mongoose");

const connectDB = async()=>{
try {
    const connect =await mongoose.connect(process.env.DATABASE_ACCSES,{
         useNewUrlParser:true,
         useUnifiedTopology:true

    })
    console.log('DataBase Connected');
} catch (error) {
    console.log(`Error!:${error.message}`)
    process.exit()
}
}

module.exports = connectDB