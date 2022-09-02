const express = require("express")
const mongoose = require("mongoose")
require('dotenv').config()
const cors = require('cors')
const app = express()
const port = process.env.PORT
const UsersRoutes = require('./routes/user.routes')
const BlogRoutes = require('./routes/blog.routes')



app.use(express.json())
app.use(cors())

// user routes
app.use('/api/user', UsersRoutes) // http://localhost:5500/api/user/admin?replicaSet=rs0

// blog routes
app.use('/api/blogs',BlogRoutes)

// database connection
const url = process.env.URL
mongoose.connect(url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
).then(()=>app.listen(port,()=>{
    console.log(`listening at port http://localhost:${port}`)
})).then(()=> console.log("Connected to MongoDB successfully")).catch(err=>console.log(err))

