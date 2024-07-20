const express = require("express");

const { AuthSignup, updateAuth, ChangePassword, forgotPassword, AuthLogin, AllAuths, DeleteAuth } = require("../controllers/Auth/auth");
const { AddCourse, Allcourses, DeleteCourse } = require("../controllers/Courses/courses");
const { AddAssignment, AllAssignments } = require("../controllers/Assignment/assignment");
const { AddQuize, AllQuizes } = require("../controllers/Quize/quize");
const { Attemptassignment, getAllassignmentAttemps, GetAllassignmentAttemps } = require("../controllers/AttemptAssignment/attemptassignment");
const { Attemptquize, Attemptquiz, getAllQuizAttemps } = require("../controllers/AttemptQuize/attemptquize");
const { AdminSignup, AdminLogin } = require("../controllers/Admin/admin");
// const { TeacherSignup, DeleteTeacher, AllTeachers } = require("../controllers/Teacher/teacher");
const router = express.Router();
router.post("/authsignup",AuthSignup);
router.post("/authlogin",AuthLogin);
router.get("/allauths",AllAuths);
router.post("/updatepersonaldata",updateAuth);
router.post("/forgotpassword",forgotPassword);
router.patch("/changepassword",ChangePassword);
router.delete("/deleteAuth/:id",DeleteAuth);


//Teacher Routes
// router.post("/teachersignup",TeacherSignup);
// router.delete("/deleteteacher",DeleteTeacher);
// router.get("/allteachers",AllTeachers);
// router.delete("/deleteteacher/:id",DeleteTeacher);
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


//Admin
router.post("/adminsignup",AdminSignup);
router.post("/adminlogin",AdminLogin);


module.exports=router;