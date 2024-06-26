const express = require("express");

const { StudentSignup, updateStudent, ChangePassword, forgotPassword } = require("../controllers/Student/student");
const { AddCourse, Allcourses } = require("../controllers/Courses/courses");
const { AddAssignment } = require("../controllers/Assignment/assignment");
const { AddQuize } = require("../controllers/Quize/quize");
const router = express.Router();
router.post("/studentsignup",StudentSignup);
router.post("/updatepersonaldata",updateStudent);
router.post("/forgotpassword",forgotPassword);
router.patch("/changepassword",ChangePassword);



//Course Routes

router.post("/addcourse",AddCourse)
router.get("/allcourses",Allcourses)
//Assignment
router.post("/addassignment",AddAssignment);

//Quize
router.post("/addquize",AddQuize);


module.exports=router;