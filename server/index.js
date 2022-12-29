require('dotenv').config()
const express = require("express")
const cors = require("cors")
const app = express()

const bcrypt= require("bcryptjs")

const jwt = require('jsonwebtoken')
const jwtKey = 'e-comm'

const PORT = process.env.PORT || 7000

app.use(express.json())
app.use(cors())

require('./db/dataBase')

const UserInfo = require('./Model/User')
const TimeTaken = require("./Model/TimeTakes")


app.get("/" , (req ,res)=>{
    res.send("hello user")
})

app.post("/signup" , async (req ,res)=>{
    let user =  new UserInfo(req.body)
    let result = await user.save()
    result = result.toObject()
    delete result.password
    jwt.sign({result} , jwtKey , {expiresIn : '2h' } , (err , token) => {
        if(err){
            res.send("somrhting went wrong")
        }

        res.send({result , auth : token})

    })
})

app.post("/login", async (req, res) => {
    let user = await UserInfo.findOne(req.body).select("-password")
    if(req.body.password && req.body.email){
         if(user){
             jwt.sign({user} , jwtKey , {expiresIn : '2h'} , (err ,token) =>{
                 if(err){
                     res.send("something went wrong")
                 }
                 res.send({user , auth : token})
             })
         }
         else{
             res.send({result : "not a user"})
         }
    }else{
         res.send({result : "not a user"})
    }
})











app.listen(PORT , ()=>{
    console.log(`This Port is running on ${PORT}`)
})