const User = require('../models/user.models')

const bycrypt = require('bcryptjs');
const router = require('../routes/user.routes');
const Blog = require('../models/blog.models');

const getAllUsers = async  (req,res) => {
    await User.find()
     .then(data => res.json(data))
     .catch(err => res.status(400).json("Error" + err))
}



const signup = async (req,res) => {
    const  {firstname,lastname,username,email,password} = req.body

    // lets check if the email and the username is taken
    let existingUserWEmail;
    

    try{
       existingUserWithEmail = await User.findOne({email})
   }
   catch(err){
    console.log(err)
   }

   if(existingUserWEmail){
    res.status(400).json({message:"Email Already Taken"})
   }
   
   
// lets encrypt the user password using bycryptjs 
    const hashedPassword = bycrypt.hashSync(password)

    const newUser = new User(
        {firstname,lastname,username,email,password:hashedPassword,blogs:[]}
    ) 

    try{
        await  newUser.save()

    }
    catch(err){
        console.log(err)
    }
    res.json("User Saved!")
}

const login = async (req,res) => {
    const {email,password} = req.body;
    
    // check if user exists
   let existingUserWEmail;

   try{
    existingUserWEmail = await User.findOne({email})
   }
   catch(err){
  res.status(404).json("error:" + err)
   }

if(!existingUserWEmail)res.status(404).json("User Not Found! Please Signup")

// check password

const isPasswordCorrect = bycrypt.compareSync(password,existingUserWEmail.password)

if(!isPasswordCorrect)res.status(400).json("Incorrect Password!")

return res.status(200).json("Logged in successfully!")
}



module.exports = {getUsers:getAllUsers,signup:signup,login:login}
