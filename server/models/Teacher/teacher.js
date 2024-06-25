
const mongoose=require("mongoose");

const teacherSchema=new mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    phone:String,
    role:String,
    education:String,
    quiz:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'quiz'
    }],
    assignments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'assignment'
    }],
    courses:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'courses'

    }]



},{
    timestamps:true
})

const TeacherModel=mongoose.model("teacher",teacherSchema);
module.exports=TeacherModel;