const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = mongoose.Schema({
        name:{
            type:String,
            require:true
        },
        email:{
            type:String,
            require:true,
            unique:true
        },
        password:{
            type:String,
            require:true
        },
        pic:{
            type:String,
            default:"https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        }
},
{timestamps:true}
)

userSchema.methods.matchPassword = async function(password){
 return await bcrypt.compare(password,this.password)
}

userSchema.pre('save',async function(next){
    if(!this.isModified){
        next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password,salt)
})

const User = mongoose.model('users',userSchema)

module.exports = User