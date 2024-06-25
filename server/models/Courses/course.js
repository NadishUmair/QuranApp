const mongoose=require("mongoose");

const CourseSchema=new mongoose.Schema({
    courseName:"String"
})

const CourseModel=new mongoose.model("course",CourseSchema);
module.exports=CourseModel;