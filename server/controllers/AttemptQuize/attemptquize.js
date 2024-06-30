const QuizAtpModel = require("../../models/AttemptQuize/attemptquize");


exports.Attemptquiz = async (req, res) => {
  const { quizAnswer, quiz, attemptBy } = req.body;
  try {
    const findalreadyresponse=await QuizAtpModel.findOne({attemptBy});
    if(findalreadyresponse){
        return res.status(409).json({
            success:false,
            message:"Submission allow only one time"
        })
    }
    const attemptquiz = new QuizAtpModel({
      quizAnswer,
      quiz,
      attemptBy,
    });
    await attemptquiz.save();
    res.status(200).json({
      success: true,
      message: "Quiz Submitt Successffully",
    });
  } catch (error) {
    res.status.json({ message: error.message });
  }
};

exports.getAllQuizAttemps=(async(req,res)=>{
    console.log("hy")
    try {
        const allQuizAttempts=await QuizAtpModel.find().populate("attemptBy");
        console.log(allQuizAttempts);
        res.status(200).json({
            success:true,
            message:"All Quizes Attempts",
            allQuizAttempts
        })
    } catch (error) {
        res.status(500).json({error})
    }
})