import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function QuranVerses() {
  const [surahs, setSurahs] = useState([]);
  const [currentSurahIndex, setCurrentSurahIndex] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/quran-simple-plain.txt")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch Quran text");
        }
        return response.text();
      })
      .then((data) => {
        // Split Quran text data into lines
        const lines = data.split("\n");
        const surahsArray = [];
        let currentSurah = [];
        let surahNumber = null;

        lines.forEach((line) => {
          if (line.trim() === "") {
            // Empty line indicates the end of a Surah
            if (currentSurah.length > 0) {
              surahsArray.push({ number: surahNumber, verses: currentSurah });
              currentSurah = [];
            }
          } else {
            // Check for Surah number (assume it is the first verse)
            const firstVerseMatch = line.match(/^\d+:\d+/);
            if (firstVerseMatch && currentSurah.length === 0) {
              surahNumber = parseInt(firstVerseMatch[0].split(":")[0], 10);
            }
            currentSurah.push(line);
          }
        });

        // Push the last Surah if there's no trailing empty line
        if (currentSurah.length > 0) {
          surahsArray.push({ number: surahNumber, verses: currentSurah });
        }

        // Sort Surahs by number
        surahsArray.sort((a, b) => a.number - b.number);

        setSurahs(surahsArray);
      })
      .catch((error) => {
        console.error("Error fetching Quran text:", error);
        setError(error.message);
      });
  }, []);

  const handleNextSurah = () => {
    if (currentSurahIndex < surahs.length - 1) {
      setCurrentSurahIndex(currentSurahIndex + 1);
    }
  };

  const handlePreviousSurah = () => {
    if (currentSurahIndex > 0) {
      setCurrentSurahIndex(currentSurahIndex - 1);
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  const currentSurah = surahs[currentSurahIndex];

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-opacity-50 bg-black">
      <Link to="/Dashboard">
        <button className="text-gray-500 absolute top-4 right-4">
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
      <div className="lg:w-[40%] p-4 mx-2 text-black bg-white rounded-lg shadow-lg overflow-y-auto max-h-[80%]">
        <h1 className="text-2xl text-black mb-4 text-center">Quran</h1>
        <div className="flex justify-between mb-4">
          <button
            onClick={handlePreviousSurah}
            disabled={currentSurahIndex === 0}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
          >
            Previous Surah
          </button>
          <button
            onClick={handleNextSurah}
            disabled={currentSurahIndex === surahs.length - 1}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
          >
            Next Surah
          </button>
        </div>
        {currentSurah && (
          <div>
            <h2 className="font-bold text-lg mb-2 text-center">
              Surah {currentSurah.number}
            </h2>
            {currentSurah.verses.map((verse, verseIndex) => (
              <p key={verseIndex} className="mb-1">
                {verse}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default QuranVerses;
