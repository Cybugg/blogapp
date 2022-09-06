const express = require('express')
const mongoose = require('mongoose')
const Blog = require('../models/blog.models')
const User = require("../models/user.models")



// get all the blog in the database
const getAllBlogs = async (req,res) => {

    let allBlogs;


    try{
        allBlogs = await Blog.find();
    }
    catch(err){
        console.log(err)
        res.status(404).json({message:"Cant get blogs"})
    }

    res.status(200).json(allBlogs)
}

// add to the blogs in the database
const addBlog =  async (req,res) => {

    let existingUser;
    
    const {category,title,description,image,user} = req.body;

    try{
         existingUser = await User.findById(user)
    }

    catch(err){
        console.log(err)
        res.status(404).json(err)
    }
   if(!existingUser)res.status(400).json({message:"Unable to find user"})


// An instance of the blog 
    const newBlog =  new Blog(
        {category,title,description,image,user}
    );
    
   try{
    const session = await mongoose.startSession()
    session.startTransaction();
    newBlog.save(session);
    existingUser.blogs.push(newBlog);
    existingUser.save(session);
    session.commitTransaction();
   
        }
   
   catch(err){
    console.log(err)
   res.status(400).json({message:err})
   }

    res.status(200).json("Blog saved ok")
   
}

// update blog in the database

const updateBlog = async (req,res) => {
    const id = req.params.id;
    const {title,description} = req.body
    
    let blog ;

    try{
        blog = await Blog.findByIdAndUpdate(id,{title,description})
    }
    catch(err){
        console.log(err)
    }

    if(!blog)res.status(404).json("Cant find blog to update")

    res.status(200).json({message:"Update ok"})

}

// get a blog by its id

const getById = async (req,res) => {
    const id = req.params.id
    let blog;

    try{
        blog = await Blog.findById(id)
    }
    catch(err){
    console.log(err)
    }

    if(!blog)res.status(404).json("Cant find blog!")

    res.status(200).json(blog)
    }

    // delete blog from the database

    const deleteBlog = async (req,res) => {
        const blogId = req.params.id
        let deleteBlogInProcess;
        try{
            deleteBlogInProcess = await Blog.findByIdAndRemove(blogId).populate('user');
            await deleteBlogInProcess.user.blogs.pull(deleteBlogInProcess);
            await deleteBlogInProcess.user.save()
            
        }
        catch(err){
            console.log(err)
        }
        if(!deleteBlogInProcess)res.status(400).json({message:"Cant find blog to delete"})

        res.status(200).json({message:"delete ok"})

    }
    // get user with populated blog by id

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
        if(!userBlogs)res.status(404).json(userBlogs)


    }


module.exports = {
    getAllBlogs:getAllBlogs,addBlog:addBlog,updateBlog:updateBlog,getById:getById,deleteBlog:deleteBlog,getUserBlogById:getUserBlogById
}