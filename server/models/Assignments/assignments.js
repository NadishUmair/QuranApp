const mongoose=require("mongoose");
const {Schema}=require('mongoose');
const AssignemntSchema=new Schema({
    assignmentTopic:String,
    assignmentQuestion:String,
    course:{
        type:Schema.Types.ObjectId,
        ref:"course"
    },
    assignmnetAttemptBy:[{
        type:Schema.Types.ObjectId,
        ref:"students"
    }]
})

const AssignmmentModel= mongoose.model("assignment",AssignemntSchema);
module.exports=AssignmmentModel;