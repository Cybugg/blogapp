const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true,
            minLength:6
        },
        blogs:[
            {type:mongoose.Types.ObjectId,
            ref:'blog',required:true}
        ]
    },
    {
        timestamps:true
    }
)

const User = mongoose.model('user',userSchema)

module.exports = User;
// users