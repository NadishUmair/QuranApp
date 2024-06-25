import React, { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { IoChevronBackSharp } from "react-icons/io5";
import { CiMoneyCheck1 } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { FaBarsProgress } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { RiLogoutCircleLine } from "react-icons/ri";

const TeacherQuiz = () => {
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [showSubmissionDialog, setShowSubmissionDialog] = useState(false);
  const [showResponseDialog, setShowResponseDialog] = useState(false);
  const [newQuiz, setNewQuiz] = useState({
    name: "",
    deadline: "",
    BsQuestion: "",
  });
  const [selectedResponse, setSelectedResponse] = useState({
    text: "",
    grade: "",
  });

  const quizzes = [
    { name: "Quiz 1", dateCreated: "3/5/2023" },
    { name: "Quiz 2", dateCreated: "4/5/2023" },
    { name: "Quiz 3", dateCreated: "3/5/2024" },
    { name: "Quiz 4", dateCreated: "10/11/2023" },
  ];

  const submissions = [
    {
      date: "5/5/2023",
      studentName: "John Doe",
      grade: "A",
      response: "This is the response text from John Doe.",
    },
    {
      date: "6/5/2023",
      studentName: "Jane Smith",
      grade: "B+",
      response: "This is the response text from Jane Smith.",
    },
    {
      date: "6/5/2023",
      studentName: "Jane Smith",
      grade: "B+",
      response: "This is the response text from Jane Smith.",
    },
    {
      date: "6/5/2023",
      studentName: "Jane Smith",
      grade: "B+",
      response: "This is the response text from Jane Smith.",
    },
    {
      date: "6/5/2023",
      studentName: "Jane Smith",
      grade: "B+",
      response: "This is the response text from Jane Smith.",
    },
    {
      date: "6/5/2023",
      studentName: "Jane Smith",
      grade: "B+",
      response: "This is the response text from Jane Smith.",
    },
  ];

  const handleCreateButtonClick = () => {
    setShowCreateDialog(true);
  };

  const handleCloseDialog = () => {
    setShowCreateDialog(false);
    setNewQuiz({ name: "", deadline: "", detail: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewQuiz((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitQuiz = () => {
    console.log("New Quiz:", newQuiz);
    // Logic to submit the new quiz goes here
    handleCloseDialog();
  };

  const handleSubmissionClick = () => {
    setShowSubmissionDialog(true);
  };

  const handleCloseSubmissionDialog = () => {
    setShowSubmissionDialog(false);
  };

  const handleCheckResponseClick = (submission) => {
    setSelectedResponse(submission);
    setShowResponseDialog(true);
  };

  const handleCloseResponseDialog = () => {
    setShowResponseDialog(false);
    setSelectedResponse({ text: "", grade: "" });
  };

  const handleGradeChange = (e) => {
    setSelectedResponse((prev) => ({ ...prev, grade: e.target.value }));
  };

  const handleSubmitGrade = () => {
    console.log("Submitted Grade:", selectedResponse.grade);
    // Logic to submit the grade goes here
    handleCloseResponseDialog();
  };

  return (
    <div className="flex flex-wrap h-[100vh] w-[100%]">
      <div className="bg-[#20813d] text-white w-[20%] h-full fixed">
        <div className="text-2xl font-bold p-2 flex flex-wrap">
          <h1>Dash</h1>
          <h1>Board</h1>
        </div>
        <div className="mt-10">
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
      <div className="w-[80%] ml-[20%]">
        <div className="flex flex-wrap p-2 gap-[70%]">
          <h1 className="p-2 text-3xl text-green-900 font-semibold">Quizzez</h1>
          <button
            onClick={handleCreateButtonClick}
            className="m-2 p-2 text-xl bg-green-600 text-white rounded-lg hover:scale-105 transition-transform duration-300"
          >
            Create +
          </button>
        </div>
        <div className="p-2 bg-green-500 m-2 text-white flex flex-wrap gap-[65%]">
          <div className="">
            <h2 className="text-xl underline">Current Quiz </h2>
            <h2 className="text-lg my-2">Quiz 1</h2>
            <h3>30 Out of 40 Attempted</h3>
            <h3 className="text-red-700 animate-blink">
              Time Remaining : 30 mins
            </h3>
          </div>
          <div
            onClick={handleSubmissionClick}
            className="my-10 p-2 bg-white text-green-700 rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <h1>Check Attempts</h1>
          </div>
        </div>
        <div className="m-2 bg-green-500 text-white p-2">
          <h1>Previous Quizzez</h1>
          <div className="flex flex-wrap">
            <div className="text-xl w-[30%]">Date</div>
            <div className="text-xl w-[30%]">Title</div>
            <div className="text-xl w-[30%]">Action</div>
          </div>
          {quizzes.map((item, index) => (
            <div
              className="flex flex-wrap my-2 border-b py-2 border-white"
              key={index}
            >
              <div className="w-[30%]">{item.dateCreated}</div>
              <div className="w-[30%]">{item.name}</div>
              <div className="lg:w-[30%] lg:flex lg:flex-wrap lg:gap-4">
                <div className="hover:underline flex flex-wrap gap-1">
                  <MdDeleteOutline className="mt-1" />
                  Delete
                </div>
                <div
                  className="hover:underline flex flex-wrap gap-1 cursor-pointer"
                  onClick={handleSubmissionClick}
                >
                  <CiMoneyCheck1 className="mt-1" />
                  Attempts
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showCreateDialog && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-opacity-50 bg-black">
          <div className="relative w-[40%] h-auto p-4 mx-2 bg-white rounded-lg shadow-lg">
            <button
              onClick={handleCloseDialog}
              className="absolute top-2 right-2 text-gray-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-4">Create New Quiz</h2>
              <div className="mb-4">
                <label className="block text-lg mb-2">Quiz Name</label>
                <input
                  type="text"
                  name="name"
                  value={newQuiz.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg"
                  placeholder="Enter quiz name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg mb-2">Deadline Time</label>
                <input
                  type="datetime-local"
                  name="deadline"
                  value={newQuiz.deadline}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg mb-2">Question</label>
                <textarea
                  name="detail"
                  value={newQuiz.detail}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg"
                  placeholder="Enter quiz details"
                ></textarea>
              </div>
              <button
                onClick={handleSubmitQuiz}
                className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
      {showSubmissionDialog && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-opacity-50 bg-black">
          <div className="relative w-[40%] h-[60%] p-4 mx-2 bg-white shadow-lg overflow-y-auto">
            <button
              onClick={handleCloseSubmissionDialog}
              className="absolute top-2 right-2 text-gray-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-4">Submissions</h2>
              {submissions.map((submission, index) => (
                <div
                  key={index}
                  className="mb-4 p-2 border rounded-lg hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleCheckResponseClick(submission)}
                >
                  <p>
                    <strong>Student Name:</strong> {submission.studentName}
                  </p>
                  <p>
                    <strong>Submission Date:</strong> {submission.date}
                  </p>
                  <p>
                    <strong>Grade:</strong> {submission.grade}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {showResponseDialog && selectedResponse && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-opacity-50 bg-black">
          <div className="relative w-[40%] h-auto p-4 mx-2 bg-white shadow-lg">
            <button
              onClick={handleCloseResponseDialog}
              className="absolute top-2 right-2 text-gray-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-4">Student Response</h2>
              <div className="mb-4">
                <label className="block text-lg mb-2">Response</label>
                <p>{selectedResponse.response}</p>
              </div>
              <div className="mb-4">
                <label className="block text-lg mb-2">Grade</label>
                <select
                  name="grade"
                  value={selectedResponse.grade}
                  onChange={handleGradeChange}
                  className="w-full p-2 border rounded-lg"
                >
                  <option value="">Select Grade</option>
                  <option value="A+">A+</option>
                  <option value="A">A</option>
                  <option value="B+">B+</option>
                  <option value="B">B</option>
                  <option value="C+">C+</option>
                  <option value="C">C</option>
                </select>
              </div>
              <button
                onClick={handleSubmitGrade}
                className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300"
              >
                Submit Grade
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeacherQuiz;
