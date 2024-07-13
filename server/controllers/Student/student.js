const express=require("express");
const bcrypt=require("bcrypt");
const StudentModel = require("../../models/Student/student");
const generateOtp=()=>{
    return Math.floor(10000 + Math.random() * 900000).toString();
  }
exports.StudentSignup=async(req,res)=>{
    console.log(req.body);
const {
    firstName,
    lastName,
    email,
    phone,
    password,
    role,
    education,
    score,
    cnicNo,
    dateOfBirth
   
}=req.body;
console.log(password);
const hashedpassword= await bcrypt.hash(password,10);
    console.log(hashedpassword);
try {
    const findSimilar=await StudentModel.findOne({email});
    if(findSimilar){
        return res.status(409).json({
            success:false,
            message:"Email Already Exist"
        })
    }
    
    const SaveUser=new StudentModel({
    firstName,
    lastName,
    email,
    phone,
    role,
    education,
    score,
    cnicNo,
    dateOfBirth,
    password:hashedpassword



    })
    await SaveUser.save();
    res.status(200).json({
        success:true,
        message:"Signup Successffully",
        SaveUser
    })

} catch (error) {
    res.status(500).send("internal Server Error");
}
    
}

exports.StudentLogin=async(req,res)=>{
 
  const {email,password}=req.body;
  console.log(req.body)
  try {
      const user=await StudentModel.findOne({email})
      if(!user){
          return res.status(404).json({
              success:false,
              msg:"user not found"
          })
      }
      console.log(user);
       const matchpassowrd= bcrypt.compare(password,user.password);
       console.log("passowrd matched",matchpassowrd);
       if(!matchpassowrd){
          return res.status(409).json({
              success:false,
              msg:'Password not matched'
          })
       }
      
      res.status(200).json({
          success:true,
          message:"User loged in Successfully",
          user
      })
  } catch (error) {
      res.status(500).send({message:error.message})
  }
}

exports.GetSingleStudent=async(req,res)=>{
    const userId=req.params.id;

  try {
    const user=await StudentModel.findById({_id:userId});

    res.status.json({
      success:true,
      user
    })
  } catch (error) {
    res.status(500).json({
      message:error.message
    })
  }
}

exports.updateStudent=async(req,res)=>{
      const {_id}=req.body;
      const body=req.body;
      try {
          
              const user=await StudentModel.findByIdAndUpdate(_id,body,{new:true})
        
            res.status(200).json({
                success:true,
                msg:"User Update Successfuly",
                user
            })
      } catch (error) {
          res.status(500).send(error.message);
      }
  }
  
  exports.forgotPassword=async(req,res)=>{
     const {email}=req.body;
    try {
      const finduser=await StudentModel.findOne({email});
      if(!finduser){
        return res.status(404).json({
          success: false,
          message: "User not found"
      });
      }
     
  const otp=generateOtp();
  const emailaddress=finduser.email;
  finduser.forgetPasswordOtp=otp;
  finduser.forgetPasswordOtpExpiry= Date.now() + 120000;
  await finduser.save();
  const emailsubject="reset passsword otp"
  const message=`You one time reset password otp is ${otp} This OTP is valid for a 2 minutes. Do not share it with anyone`
  const requestType="Your are requested for reset password"
  
  await sendEmail(emailsubject,emailaddress,message,requestType);
      res.status(200).json({
        success:true,
        message:"Otp Send succesfully"
      })
    } catch (error) {
      res.status(500).send(error)
    }
  }
  
  exports.verifyOtp = async (req, res) => {
    const { otp } = req.body.otp;
    const { email } = req.body.email;
  
    try {
      const finduser = await StudentModel.findOne({ email });
      if (!finduser || finduser.forgetPasswordOtp !== otp || finduser.forgetPasswordOtpExpiry < Date.now()) {
        return res.status(404).json({
          success: false,
          message: "OTP expired or does not exist"
        });
      }
      res.status(200).json({
        success: true,
        message: "OTP matched successfully"
      });
    } catch (error) {
      res.status(500).send("Internal Server Error");
    }
  };
  
  
  
  exports.ChangePassword = async (req, res) => {
    console.log(req.body);
  
    // Destructure newPassword and email from the request body
    const { userdata: { password: newPassword }, email: { email } } = req.body;
  
    try {
      const finduser = await StudentModel.findOne({ email });
  
      if (!finduser) {
        return res.status(404).json({
          success: false,
          message: "User not found"
        });
      }
  
      // Ensure newPassword is provided before hashing
      if (!newPassword) {
        return res.status(400).json({
          success: false,
          message: "New password is required"
        });
      }
  
      // Hash the new password
      const hashpassword = await bcrypt.hash(newPassword, 10);
      finduser.password = hashpassword;
  
      // Validate and save the user
      const updatedUser = await finduser.save();
      console.log(updatedUser);
  
      res.status(200).json({
        success: true,
        message: "Password changed successfully"
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error");
    }
  };
  
exports.AllStudents=async(req,res)=>{
  try {
     const AllStudents=await StudentModel.find();
     res.status(200).json({
      success:true,
      message:"All Student",
      AllStudents
     })
  } catch (error) {
    res.status(500).json({message:error.message});
  }
}

exports.DeleteStudent=async(req,res)=>{
  const id=req.params.id;
  try {
      const student=await StudentModel.findByIdAndDelete(id);
      res.status(200).json({
          success:true,
          message:"Student Deleted Successfully",
          student
      })
  } catch (error) {
      res.status(500).json({
          message:error.message
      })
  }
}