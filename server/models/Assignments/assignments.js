const mongoose=require('mongoose');
 const Schema=mongoose("Schema")
const AssignemntSchema=new Schema({
    asssignmentNme:String;
})

const AssignmmentModel=new mongoose.model("assignment",AssignemntSchema);
module.exports=AssignmmentModel;