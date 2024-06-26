

const CourseModel = require("../../models/Courses/course");

exports.AddCourse=(async(req,res)=>{
    const {courseName}=req.body;
    const course=courseName.toLowerCase();
    try {
        const FindCourse=await CourseModel.findOne({courseName:course});
        if(FindCourse){
            return res.status(409).json({
                success:false,
                message:"Course already exist with this name",
            })
        }
        const newCourse=await new CourseModel({
            courseName:course,

        })
        await newCourse.save();
        res.status(200).json({
            success:true,
            message:"Course Added Succesffuly"
        })
    } catch (error) {
        res.status(500).send("internal server error",error)
    }
})

exports.Allcourses=(async(req,res)=>{
try {
    const allcourses=await CourseModel.find().populate(["assignments","quizes"]);
    res.status(200).json({
        success:true,
        allcourses
    })
} catch (error) {
    res.status(500).json({message:error.message})
}
})