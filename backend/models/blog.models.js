const mongoose = require("mongoose")
const schema = mongoose.Schema

const blogSchema = new schema(
    {
        title:{
            type:String,
            required:true
        },
        category:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        image:{
            type:String,
            required:true
        },
        user:{
            type:mongoose.Types.ObjectId,
            ref:"user",
            required:true
        }
    },{
        timestamps:true,
    }
);

const Blog = mongoose.model("blog",blogSchema);

module.exports = Blog
