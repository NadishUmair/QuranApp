// src/AttemptQuiz.js
import React, { useState } from "react";

const AttemptQuiz = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Answer:", selectedOption);
    setSelectedOption("");
  };

  return (
    <div className="max-w-lg mx-auto my-10 p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
        Quiz Question
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Which of the following is not a part of the MERN stack?
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label className="text-sm font-medium text-gray-900 mb-2">
          Your Answer:
        </label>
        <div className="mb-4">
          <label className="block mb-2">
            <input
              type="radio"
              name="option"
              value="MongoDB"
              checked={selectedOption === "MongoDB"}
              onChange={(e) => setSelectedOption(e.target.value)}
              className="mr-2"
            />
            MongoDB
          </label>
          <label className="block mb-2">
            <input
              type="radio"
              name="option"
              value="Express.js"
              checked={selectedOption === "Express.js"}
              onChange={(e) => setSelectedOption(e.target.value)}
              className="mr-2"
            />
            Express.js
          </label>
          <label className="block mb-2">
            <input
              type="radio"
              name="option"
              value="React.js"
              checked={selectedOption === "React.js"}
              onChange={(e) => setSelectedOption(e.target.value)}
              className="mr-2"
            />
            React.js
          </label>
          <label className="block mb-2">
            <input
              type="radio"
              name="option"
              value="Vue.js"
              checked={selectedOption === "Vue.js"}
              onChange={(e) => setSelectedOption(e.target.value)}
              className="mr-2"
            />
            Vue.js
          </label>
        </div>
        <button
          type="submit"
          className="py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AttemptQuiz;
