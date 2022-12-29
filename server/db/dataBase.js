const mongoose =require("mongoose")

mongoose.connect("mongodb://localhost:27017/StudyMatrial")
.then(()=>{
    console.log("connnected to User Database")
})
.catch(err=>{
    console.log(err)
})