import React from "react";
import { Link } from "react-router-dom";

const NamazStreaks = () => {
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-opacity-50 bg-black">
      <div className="lg:w-[40%] mx-2 p-2 bg-white rounded-lg shadow-lg">
        <div className="flex flex-wrap justify-between items-center w-full gap-2">
          <div className="flex gap-2">
            <img
              src={process.env.PUBLIC_URL + "/images/ramadan-icon.png"}
              alt="Namaz"
              width={40}
              height={40}
            />
            <h1 className="text-xl">Namaz Streaks</h1>
          </div>
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
        <div className="flex flex-wrap justify-center p-2 gap-2 text-3xl">
          <img
            src={process.env.PUBLIC_URL + "/images/rose-flower-icon.png"}
            alt="Fire"
            width={40}
            height={20}
          />
          <h2 className="pt-4">5 Days</h2>
        </div>
        <div>
          <h3 className="text-blue-600 text-md p-4">
            Good Job! You Can proceed on APP
          </h3>
        </div>
      </div>
    </div>
  );
};

export default NamazStreaks;
