import React from "react";
import Navbar from "../components/common/Navbar";
import StatsCard from "../components/dashboard/StatsCard";
import PerformanceChart from "../components/dashboard/PerformanceChart";

const Dashboard = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-7xl mx-auto">

          <h1 className="text-4xl font-bold text-gray-800 mb-8">
            Student Dashboard 
          </h1>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <StatsCard
              title="Quizzes Attempted"
              value="24"
            />

            <StatsCard
              title="Average Score"
              value="82%"
            />

            <StatsCard
              title="Best Subject"
              value="JavaScript"
            />

            <StatsCard
              title="Bookmarks"
              value="18"
            />
          </div>

          {/* Performance Section */}
          <div className="grid md:grid-cols-2 gap-6">
            <PerformanceChart />

            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">
                Weekly Progress 
              </h2>

              <p className="text-gray-600 mb-3">
                You improved your overall accuracy by
                <span className="font-bold text-green-600">
                  {" "}12%
                </span>
                this week.
              </p>

              <p className="text-gray-600">
                Keep solving quizzes daily to stay ahead
                in technical interviews.
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Dashboard;