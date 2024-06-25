import React, { useState, useEffect } from "react";
import { FaHome } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { RiLogoutCircleLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { FaBarsProgress } from "react-icons/fa6";

const StudentProfile = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    phone: "",
    course: "",
  });
  const [editMode, setEditMode] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("logeduser");
    if (data) {
      const user = JSON.parse(data);
      setUserData(user);
    }
  }, []);

  const handleLogout = () => {
    console.log("Logging out...");
    localStorage.removeItem("logeduser");
    console.log("User data removed from localStorage.");
    navigate("/");
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    // Prepare the data to send to the backend
    const updatedUserData = {
      ...userData,
      password,
      confirmPassword,
    };

    // Make a POST request to your backend API endpoint
    fetch("http://localhost:8080/api/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUserData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Response from server:", data);
        // Update localStorage with the latest user data if needed
        localStorage.setItem("logeduser", JSON.stringify(data));
        setUserData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    setEditMode(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-wrap h-[100vh]">
      <div className="bg-[#7194f3] text-white w-[20%] h-full fixed">
        <div className="text-2xl font-bold p-2 flex flex-wrap">
          <h1>Dash</h1>
          <h1>Board</h1>
        </div>
        <div className="mt-10">
          <Link to="/Dashboard">
            <div className="mb-2 text-lg flex flex-wrap gap-2 py-2 lg:px-4 md:px-4 md:mx-2 lg:mx-2 ml-1 border-b border-white hover-effect w-[80%]">
              <FaHome className="mt-1" />
              Home
            </div>
          </Link>
          <Link to="/studentprofile">
            <div className="mb-2 text-lg flex flex-wrap gap-2 py-2 lg:px-4 md:px-4 md:mx-2 lg:mx-2 ml-1 border-b border-white hover-effect w-[80%]">
              <FaRegUser className="mt-1" />
              Profile
            </div>
          </Link>
          <div className="mb-2 text-lg flex flex-wrap gap-2 py-2 lg:px-4 md:px-4 md:mx-2 lg:mx-2 ml-1 border-b border-white hover-effect w-[80%]">
            <FaBarsProgress className="mt-1" />
            Progress
          </div>
          <button
            onClick={handleLogout}
            className="mb-2 text-lg flex flex-wrap gap-2 py-2 lg:px-4 md:px-4 md:mx-2 lg:mx-2 ml-1 border-b text-red-600 border-white hover-effect w-[80%]"
          >
            <RiLogoutCircleLine className="mt-1" />
            Logout
          </button>
        </div>
      </div>
      <div className="w-[80%] p-3 ml-[20%] border border-gray-300 rounded-lg shadow-lg">
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">Student Profile</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-800 font-semibold mb-1">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={userData.firstName}
                onChange={handleChange}
                className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:border-blue-500"
                readOnly={!editMode}
              />
            </div>
            <div>
              <label className="block text-gray-800 font-semibold mb-1">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={userData.lastName}
                onChange={handleChange}
                className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:border-blue-500"
                readOnly={!editMode}
              />
            </div>
            <div>
              <label className="block text-gray-800 font-semibold mb-1">
                Date of Birth
              </label>
              <input
                type="date"
                name="dateOfBirth"
                value={userData.dateOfBirth}
                onChange={handleChange}
                className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:border-blue-500"
                readOnly={!editMode}
              />
            </div>
            <div>
              <label className="block text-gray-800 font-semibold mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:border-blue-500"
                readOnly={!editMode}
              />
            </div>
            <div>
              <label className="block text-gray-800 font-semibold mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={userData.phone}
                onChange={handleChange}
                className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:border-blue-500"
                readOnly={!editMode}
              />
            </div>
            <div>
              <label className="block text-gray-800 font-semibold mb-1">
                Registered Course
              </label>
              <input
                type="text"
                name="course"
                value={userData.course}
                onChange={handleChange}
                className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:border-blue-500"
                readOnly={!editMode}
              />
            </div>
            {editMode && (
              <>
                <div>
                  <label className="block text-gray-800 font-semibold mb-1">
                    New Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-800 font-semibold mb-1">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>
              </>
            )}
          </div>
          <div className="flex mt-6">
            {!editMode ? (
              <button
                onClick={handleEdit}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Edit Profile
              </button>
            ) : (
              <>
                <button
                  onClick={handleSave}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                >
                  Save Changes
                </button>
                <button
                  onClick={() => setEditMode(false)}
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Cancel
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
