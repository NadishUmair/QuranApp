import React, { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { Link } from "react-router-dom";

const Qna = () => {
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [reply, setReply] = useState("");

  const list = [
    {
      id: 1,
      studentPic: "img",
      studentName: "Momina Shakoor",
      question:
        "hello I wanted to ask that how many more assignments are left?",
      reply: "2",
      waitingSince: "2 mins",
    },
    {
      id: 2,
      studentPic: "img",
      studentName: "Laiba Shakoor",
      question: "What does the word alhamd Means?",
      reply: "2",
      waitingSince: "2 mins",
    },
    {
      id: 3,
      studentPic: "img",
      studentName: "Rida Mehmood",
      question:
        "hello I wanted to ask that how many more assignments are left?",
      reply: "2",
      waitingSince: "2 mins",
    },
  ];

  const handleReplyClick = (question) => {
    setSelectedQuestion(question);
    setShowReplyBox(true);
  };

  const handleCloseReplyBox = () => {
    setShowReplyBox(false);
    setSelectedQuestion(null);
    setReply("");
  };

  const handleSubmitReply = () => {
    // Handle the reply submission logic here
    console.log(`Reply submitted: ${reply}`);
    handleCloseReplyBox();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-opacity-50 bg-black">
      <div className="w-[90%] p-2 mx-2 bg-white rounded-lg shadow-lg ">
        <div className="flex flex-wrap gap-[50%]">
          <h1 className="p-2">Questions & Answers</h1>
          <div className="flex flex-wrap gap-8">
            <div className="p-2 hover:border-b-2 border-blue-500 hover:text-blue-500">
              All(3)
            </div>
            <div className="p-2 hover:border-b-2 border-blue-500 hover:text-blue-500">
              Read(2)
            </div>
            <div className="p-2 hover:border-b-2 border-blue-500 hover:text-blue-500">
              Unread(1)
            </div>
            <Link to="/TeacherDashboard">
              <button className="text-gray-500 mt-2 ml-10">
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
            </Link>
          </div>
        </div>

        <div className="border-blue-500 border-2 text-center">
          <div className="flex flex-column gap-10 bg-blue-500 text-white py-4">
            <div className="w-[10rem] ml-7">Student</div>
            <div className="w-[29rem]">Question</div>
            <div className="w-[3rem]">Reply</div>
            <div className="w-[6rem]">Waiting since</div>
          </div>
          {list.map((item) => (
            <div
              key={item.id}
              className="flex item-center justify-center gap-10 border-b-2 text-blue-900 py-2 border-blue-500"
            >
              <div className="w-[10rem] ml-7 flex gap-2 justify-center">
                <div className="border-2 border-black rounded-full p-2 m-1">
                  {item.studentPic}
                </div>
                <div>{item.studentName}</div>
              </div>
              <div className="w-[29rem] flex items-center justify-center">
                {item.question}
              </div>
              <div className="w-[3rem] flex items-center justify-center">
                {item.reply}
              </div>
              <div className="w-[6rem] flex items-center justify-center">
                {item.waitingSince}
              </div>
              <div className="w-[10rem] flex flex-wrap justify-center items-center">
                <button
                  onClick={() => handleReplyClick(item)}
                  className="px-2 h-8 border-2 border-blue-500 text-blue-500 rounded-lg hover:scale-105 transition-transform duration-300"
                >
                  Reply
                </button>
                <button className="text-blue-500">
                  <CiMenuKebab />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showReplyBox && selectedQuestion && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-opacity-50 bg-black">
          <div className="relative w-[40%] h-[60%] p-4 mx-2 bg-white rounded-lg shadow-lg">
            <button
              onClick={handleCloseReplyBox}
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
            <div className=" h-[30%] p-4">
              <h1 className="text-xl font-bold">Question</h1>
              <p>{selectedQuestion.question}</p>
            </div>
            <div className="h-[70%] p-4">
              <textarea
                className="w-full h-3/4 p-2 border rounded-lg"
                value={reply}
                onChange={(e) => setReply(e.target.value)}
                placeholder="Type your reply here..."
              />
              <button
                onClick={handleSubmitReply}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Qna;
