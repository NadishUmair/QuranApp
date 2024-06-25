import React, { useState } from "react";
import { Link } from "react-router-dom";

const StudentQna = () => {
  const [question, setQuestion] = useState("");
  const [replies, setReplies] = useState([
    {
      date: "2024-05-30",
      question: "What is React?",
      reply: "React is a JavaScript library for building user interfaces.",
    },
    {
      date: "2024-05-28",
      question: "What is Tailwind CSS?",
      reply: "Tailwind CSS is a utility-first CSS framework.",
    },
    // Add more replies as needed for demonstration
    {
      date: "2024-05-27",
      question: "What is Node.js?",
      reply:
        "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
    },
    {
      date: "2024-05-26",
      question: "What is Express.js?",
      reply:
        "Express is a fast, unopinionated, minimalist web framework for Node.js.",
    },
    {
      date: "2024-05-25",
      question: "What is MongoDB?",
      reply:
        "MongoDB is a document-oriented NoSQL database used for high volume data storage.",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the question to the server
    setReplies([
      ...replies,
      {
        date: new Date().toISOString().split("T")[0],
        question,
        reply: "Pending reply...",
      },
    ]);
    setQuestion("");
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-opacity-50 bg-black">
      <div className="lg:w-[40%] mx-2 p-4 bg-white rounded-lg shadow-lg">
        <div className="flex justify-between items-center w-full mb-4">
          <h1 className="text-xl">Ask a Question</h1>
          <Link to="/Dashboard">
            <button className="text-gray-500">
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
        <form onSubmit={handleSubmit} className="mb-4">
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full p-2 border rounded-lg mb-2"
            placeholder="Type your question here..."
            rows="4"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg"
          >
            Submit
          </button>
        </form>
        <h2 className="text-lg mb-2">Previous Replies</h2>
        <div className="overflow-y-auto max-h-48">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="px-4 py-2 border">Date</th>
                <th className="px-4 py-2 border">Question</th>
                <th className="px-4 py-2 border">Reply</th>
              </tr>
            </thead>
            <tbody>
              {replies.map((reply, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 border">{reply.date}</td>
                  <td className="px-4 py-2 border">{reply.question}</td>
                  <td className="px-4 py-2 border">{reply.reply}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentQna;
