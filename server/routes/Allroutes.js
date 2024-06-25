const express = require("express");

const { StudentSignup } = require("../controllers/Student/student");
const router = express.Router();
router.post("/studentsignup",StudentSignup);

module.exports=router;