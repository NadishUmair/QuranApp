
const mongoose=require("mongoose");

const StudentSchema=new mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    phone:String,
    role:String,
    education:String,
    score:Number,
    cnicNo:Number,
    password:String,
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

const StudentModel=mongoose.model("Student",StudentSchema);
module.exports=StudentModel;