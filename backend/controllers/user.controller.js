const User = require('../models/user.models')

const bycrypt = require('bcryptjs');
const router = require('../routes/user.routes');
const Blog = require('../models/blog.models');

const getAllUsers = async  (req,res) => {
    await User.find()
     .then(data => res.json(data))
     .catch(err => res.status(400).json("Error" + err))
}



const signup = (req,res) => {
    const  {name,email,password} = req.body
    const existingUser = (user)=>{
    if(user){res.status(400).json("User Already Exists! Log in instead")}
}
   User.findOne({email})
    .then(User => existingUser(User) )
    .catch(err => res.status(404).json(err))

    const hashedPassword = bycrypt.hashSync(password)

    const newUser = new User(
        {name,email,password:hashedPassword,blogs:[]}
    ) 

    newUser.save()
    .then(
        () => res.json("User Saved!")
    )
    .catch(
        err => res.status(404).json(err + " email already probably used! Login instead if it is your email")
    )
}

const login = async (req,res) => {
    const {email,password} = req.body;
    
    // check if user exists
   let existingUser;

   try{
    existingUser = await User.findOne({email})
   }
   catch(err){
  res.status(404).json("error:" + err)
   }

if(!existingUser)res.status(404).json("User Not Found! Please Signup")

// check password

const isPasswordCorrect = bycrypt.compareSync(password,existingUser.password)

if(!isPasswordCorrect)res.status(400).json("Incorrect Password!")

return res.status(200).json("Okay password")
}



module.exports = {getUsers:getAllUsers,signup:signup,login:login}
