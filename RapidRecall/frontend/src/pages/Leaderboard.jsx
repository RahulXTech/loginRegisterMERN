import React from "react";
import Navbar from "../components/common/Navbar";

const users = [
  {
    rank: 1,
    name: "Rahul Sharma",
    score: 980
  },
  {
    rank: 2,
    name: "Aman Verma",
    score: 920
  },
  {
    rank: 3,
    name: "Priya Singh",
    score: 890
  }
];

const Leaderboard = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">
            Leaderboard 🏆
          </h1>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            {users.map((user) => (
              <div
                key={user.rank}
                className="flex justify-between items-center p-5 border-b"
              >
                <div className="flex items-center gap-4">
                  <span className="text-xl font-bold text-blue-600">
                    #{user.rank}
                  </span>

                  <h2 className="font-semibold">
                    {user.name}
                  </h2>
                </div>

                <p className="font-bold text-green-600">
                  {user.score} pts
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Leaderboard;