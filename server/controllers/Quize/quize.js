const CourseModel = require('../../models/Courses/course');
const QuizeModel=require('../../models/Quizes/quize')
exports.AddQuize=(async(req,res)=>{
    const {quizeTopic,course, quizeQuestion}=req.body;
    const quizeName=quizeTopic.toLowerCase();
    try {
        const findQuize=await QuizeModel.findOne({quizeTopic:quizeName});
        if(findQuize){
            return res.status(409).json({
                success:false,
                message:"Quize Already exist with this name"
            })
        }
        const findCourse=await CourseModel.findById(course);
        if(!findCourse){
            return res.status(404).json({
                success:false,
                message:"course not exist"
            })
        }
        const newQuize=new QuizeModel({
            quizeTopic:quizeName,
            quizeQuestion,
            course
        })
        await newQuize.save();
        findCourse.quizes.push(newQuize._id);
        await findCourse.save();
        res.status(200).json({
           success:false,
           message:"Quize Added Successffully"
        })
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})