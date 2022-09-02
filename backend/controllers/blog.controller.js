const express = require('express')
const mongoose = require('mongoose')
const Blog = require('../models/blog.models')
const User = require("../models/user.models")

const getAllBlogs =  (req,res) => {
     Blog.find()
    .then(blogs => res.status(200).json(blogs))
    .catch(err => res.status(400).json("error"+err))
}

const addBlog =  async (req,res) => {

    let existingUser;
    
    const {title,description,image,user} = req.body;

    try{
         existingUser = await User.findById(user)
    }

    catch(err){
        console.log(err)
        res.status(404).json(err)
    }
   if(!existingUser)res.status(400).json({message:"Unable to find user"})


    const newBlog =  new Blog(
        {title,description,image,user}
    );
    

    
   try{
    const session = await mongoose.startSession()
    session.startTransaction();
    newBlog.save(session);
    existingUser.blogs.push(newBlog);
    existingUser.save(session);
    session.commitTransaction();
    res.status(200).json("Blog saved Successfully!")
        }
   
   catch(err){
    console.log(err)
   res.status(500).json({message:err})
   }
    
}

const updateBlog =  (req,res) => {
    const blogId = req.params.id;
    const {title,description} = req.body
    
   const blog =  Blog.findByIdAndUpdate(blogId,{title,description})
        .then(() => res.status(200).json("Blog Updated!"))
        .catch(err => res.status(400).json(err))

        if(!blog)res.status(500).json("Unable to update!")

}
const getById =  (req,res) => {
    const blogId = req.params.id
    let blog;
    Blog.findById(blogId)
        .then(
            singleblog => {
                blog = singleblog;
                res.status(200).json(blog)}
        )
        .catch(
            err => res.status(400).json("Error: "+ err)
        )
    
        if(!blog)res.status(500).json("No Blog Found!")
    }

    const deleteBlog = async (req,res) => {
        const blogId = req.params.id
        let deleteBlogInProcess;
        try{
            deleteBlogInProcess = await Blog.findByIdAndRemove(blogId).populate('user');
            await deleteBlogInProcess.user.blogs.pull(deleteBlogInProcess);
            await deleteBlogInProcess.user.save()
            res.status(200).json({message:"Successfully deleted"})
        }
        catch(err){
            console.log(err)
            res.status(400).json({message:err})
        }
        if(!deleteBlogInProcess)res.status(500).json({message:"Unable to delete blog!"})

    }
    const getUserBlogById = async (req,res) => {

        const userBlogId = req.params.id
        let userBlogs
        try{ 
            userBlogs = await User.findById(userBlogId).populate("blogs");
            res.status(200).json({blogs:userBlogs})
        }
        catch(err){
            console.log(err)
        }
        if(!userBlogs)res.status(400).json("cant find user")
    }


module.exports = {
    getAllBlogs:getAllBlogs,addBlog:addBlog,updateBlog:updateBlog,getById:getById,deleteBlog:deleteBlog,getUserBlogById:getUserBlogById
}