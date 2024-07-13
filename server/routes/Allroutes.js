const express = require("express");

const { StudentSignup, updateStudent, ChangePassword, forgotPassword, StudentLogin, AllStudents, DeleteStudent } = require("../controllers/Student/student");
const { AddCourse, Allcourses, DeleteCourse } = require("../controllers/Courses/courses");
const { AddAssignment, AllAssignments } = require("../controllers/Assignment/assignment");
const { AddQuize, AllQuizes } = require("../controllers/Quize/quize");
const { Attemptassignment, getAllassignmentAttemps, GetAllassignmentAttemps } = require("../controllers/AttemptAssignment/attemptassignment");
const { Attemptquize, Attemptquiz, getAllQuizAttemps } = require("../controllers/AttemptQuize/attemptquize");
const router = express.Router();
router.post("/studentsignup",StudentSignup);
router.post("/studentlogin",StudentLogin);
router.get("/allstudents",AllStudents);
router.post("/updatepersonaldata",updateStudent);
router.post("/forgotpassword",forgotPassword);
router.patch("/changepassword",ChangePassword);
router.delete("/deletestudent/:id",DeleteStudent);


//Course Routes

router.post("/addcourse",AddCourse)
router.get("/allcourses",Allcourses)
router.delete("/deletecourse/:id",DeleteCourse)
//Assignment
router.post("/addassignment",AddAssignment);
router.get("/allassignmnets",AllAssignments);
router.post("/submittassignment",Attemptassignment);
router.get("/allassignmnetattempts",GetAllassignmentAttemps)
//Quize
router.post("/addquize",AddQuize);
router.get("/allquizes",AllQuizes)
router.post("/submittquize",Attemptquiz);
router.get("/allquizesattempts",getAllQuizAttemps)




module.exports=router;