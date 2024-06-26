const mongoose=require("mongoose");
const {Schema}=require('mongoose');
const QuizeAtpSchema=new Schema({
    quizeAnswer:String,
    attemptBy:{
        type:Schema.Types.ObjectId,
        ref:"students"
    },
    quiz:{
        type:Schema.Types.ObjectId,
        ref:"quizes"
    },

})

const QuizeAtpModel=new mongoose.model("quizeatpm",QuizeAtpSchema);
module.exports=QuizeAtpModel;