import React from "react";
import { Link } from "react-router-dom";
import { IoChevronBackSharp } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaBarsProgress } from "react-icons/fa6";
import { RiLogoutCircleLine } from "react-icons/ri";

const TeacherLecture = () => {
  return (
    <div className="flex flex-wrap h-[100vh] ">
      <div className="bg-[#172285] text-white  w-[20%] h-full fixed">
        <div className="text-2xl  font-bold p-2 flex flex-wrap  ">
          <h1>Dash</h1>
          <h1>Board</h1>
        </div>
        <div className=" mt-10 ">
          <Link to="/TeacherDashboard">
            <div className="mb-2 text-lg flex flex-wrap gap-2 py-2 lg:px-4 md:px-4 md:mx-2 lg:mx-2 ml-1 border-b border-white hover-effect w-[80%]">
              <IoChevronBackSharp className="mt-1" />
              Back
            </div>
          </Link>
          <Link to="/">
            <div className="mb-2 text-lg flex flex-wrap gap-2 py-2 lg:px-4 md:px-4 md:mx-2 lg:mx-2 ml-1 border-b border-white hover-effect w-[80%]">
              <FaHome className="mt-1" />
              Home
            </div>
          </Link>
          <div className="mb-2 text-lg flex flex-wrap gap-2 py-2 lg:px-4 md:px-4 md:mx-2 lg:mx-2 ml-1 border-b border-white hover-effect w-[80%]">
            <FaRegUser className="mt-1" />
            Profile
          </div>
          <div className="mb-2 text-lg flex flex-wrap gap-2 py-2 lg:px-4 md:px-4 md:mx-2 lg:mx-2 ml-1 border-b border-white hover-effect w-[80%]">
            <FaBarsProgress className="mt-1" />
            Progress
          </div>
          <div className="mb-2 text-lg flex flex-wrap gap-2  py-2 lg:px-4 md:px-4 md:mx-2 lg:mx-2 ml-1 border-b text-red-600  border-white hover-effect w-[80%]">
            <RiLogoutCircleLine className="mt-1" />
            Logout
          </div>
        </div>
      </div>
      <div className="w-[80%] ml-[20%] border-2 border-red-900"></div>
    </div>
  );
};

export default TeacherLecture;
